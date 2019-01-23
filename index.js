// REQUIRES
var yaml = require('yamljs');
var slugify = require('slugify');
var showdown = require('showdown');
var fs = require('fs');
var pug = require('pug');
var _ = require('lodash');

// CONFIG
var settings = yaml.load('settings.yaml');
var mdConverter = new showdown.Converter({
  noHeaderId: false
});

// STRINGS
const CAPTION_TAG = "Caption: ";

function generatePages() {
  // Check for missing pages
  checkPages();

  // Create a contents object in global settings
  settings.contents = [];
  settings.contents_appendices = [];

  // Generate pages from settings.yaml
  settings.pages.forEach(function(page, id) {
    var file = slugify(page.title, { remove: /[$*_+~.()'"!\-:@?,]/g }).toLowerCase();
    var slug = '/' + file;
    var pageClass = page.class;

    if (id === 0) {
      slug = '/';
    }

    if (page.appendix) {
      settings.contents_appendices.push({
        title: page.title,
        slug: slug,
        custom_contents: page.custom_contents
      });
    } else {
      settings.contents.push({
        title: page.title,
        slug: slug,
        custom_contents: page.custom_contents
      });
    }

    generatePage(id, page.title, slug, file, pageClass);
  });

  settings.contents_combined = _.concat(settings.contents, settings.contents_appendices);
}

const HIGHLIGHT_START = "<p>[start_highlight]</p>";
const HIGHLIGHT_END = "<p>[end_highlight]</p>";

function generatePage(id, title, slug, file, pageClass) {
  fs.readFile('pages/' + file + '.md', 'utf8', function(err, data) {
    // Throw an error for page files that can't be found
    if (err) {
      console.log("[ERROR] Can't find pages/" + slug + ".md");
    }

    var pageNext = "/";
    var pagePrevious = "/";

    // Convert Markdown to HTML
    var content = mdConverter.makeHtml(data)

    // Find the next page
    if (settings.contents_combined[id + 1]) {
      pageNext = settings.contents_combined[id + 1].slug;
    }

    // Find the previous page
    if (settings.contents_combined[id - 2]) {
      pagePrevious = settings.contents_combined[id - 1].slug;
    }

    // Create captions by stripping out CAPTION_TAG
    // and replace it with <p class="caption">
    if (content) {
      while (content.indexOf(CAPTION_TAG) !== -1) {
        var pos = content.indexOf(CAPTION_TAG);
        content = content.replace(CAPTION_TAG, '');
        content = [content.slice(0, pos - 1), ' class="caption">', content.slice(pos)].join('');
      }

      while (content.indexOf(HIGHLIGHT_START) !== -1) {
        content = content.replace(HIGHLIGHT_START, '</div><div class="highlight-section" data-markdown="1"><div data-markdown="1">');
      }

      while (content.indexOf(HIGHLIGHT_END) !== -1) {
        content = content.replace(HIGHLIGHT_END, '</div></div><div class="content">');
      }
    }

    if (!fs.existsSync('public' + slug)){
      fs.mkdirSync('public' + slug);
    }

    fs.writeFileSync('public' + slug + '/index.html', pug.renderFile('views/page.pug', {
        title: title,
        slug: slug,
        content: content,
        settings: settings,
        pageCount: settings.contents_combined.length - 1,
        pageCurrent: id,
        pageNext: pageNext,
        pagePrevious: pagePrevious,
        pageClass: pageClass
      }));
  });
}

function checkPages() {
  var pageFiles = [];
  var unusedFiles = [];

  // Find files in the pages folder
  fs.readdir('pages', function(err, files) {
    if (err) {
      throw err;
    }

    // Add each found file to the pageFiles array
    // Strip out the .md file extension
    files.forEach(function(file, index) {
      pageFiles.push(file.replace(".md", ''));
    });

    // Loop through each found page file

    pageFiles.forEach(function(file, index) {
      var found = false;

      settings.pages.forEach(function(page, index) {
        page = slugify(page.title, { remove: /[$*_+~.()'"!\-:@?,]/g }).toLowerCase();

        if (file === page) {
          found = true;
        }
      });

      if (!found) {
        unusedFiles.push(file);
      }
    });

    unusedFiles.forEach(function(file, index) {
      if (file !== "cover") {
        console.log(`[WARN] Unused file pages/${file}.md`);
      }
    })
  });
}

generatePages();
