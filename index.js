// REQUIRES
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app)
var yaml = require('yamljs');
var slugify = require('slug');
var showdown = require('showdown');
var fs = require('fs');
var helmet = require('helmet');

app.use(helmet());

// CONFIG
var settings = yaml.load('settings.yaml');
var mdConverter = new showdown.Converter({
  noHeaderId: false
});

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use('/public', express.static(path.join(__dirname, 'public')));

// STRINGS
const CAPTION_TAG = "Caption: ";

function generatePages() {
  // Check for missing pages
  checkPages();

  // Create a contents object in global settings
  settings.contents = [];

  // Generate pages from settings.yaml
  for (var id in settings.pages) {
    var id = parseInt(id);
    var title = settings.pages[id];
    var file = slugify(title).toLowerCase()
    var slug = "/" + file;

    // If this is the first page, make it the root
    if (id === 0) {
      slug = "/";
    }

    settings.contents.push({
      title: title,
      slug: slug
    });

    generatePage(id, title, slug, file);
  }
}

function generatePage(id, title, slug, file) {
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
    if (settings.pages[id + 1]) {
      pageNext = slugify(settings.contents[id + 1].slug).toLowerCase();
    }

    // Find the previous page
    if (settings.pages[id - 2]) {
      pagePrevious = slugify(settings.contents[id - 2].slug).toLowerCase();
    }

    // Create captions by stripping out CAPTION_TAG
    // and replace it with <p class="caption">
    if (content) {
      while (content.indexOf(CAPTION_TAG) !== -1) {
        var pos = content.indexOf(CAPTION_TAG);
        content = content.replace(CAPTION_TAG, '');
        content = [content.slice(0, pos - 1), ' class="caption">', content.slice(pos)].join('');
      }
    }

    app.get(slug, function(req, res) {
      res.render('page', {
        title: title,
        slug: slug,
        content: content,
        settings: settings,
        pageCount: settings.pages.length - 1,
        pageCurrent: id,
        pageNext: pageNext,
        pagePrevious: pagePrevious,
        contents: settings.contents
      });
    });
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
    for (var file in pageFiles) {
      var found = false;
      file = pageFiles[file];

      // Compare it against the pages in settings.yaml
      for (var page in settings.pages) {
        page = slugify(settings.pages[page]).toLowerCase();

        // Set the flag if it's found
        if (file === page) {
          found = true;
        }
      }

      // If it isn't found, put it into the unusedFiles array
      if (!found) {
        unusedFiles.push(file);
      }
    }

    // Show a warning in the console if there are extra page files
    for (var file in unusedFiles) {
      file = unusedFiles[file];

      if (file !== "cover") {
        console.log("[WARN] Unused file pages/" + file + ".md");
      }
    }
  });
}

generatePages();

http.listen(app.get('port'), function() {
  console.log(settings.title)
  console.log("Available at http://localhost:" + app.get('port'));
  console.log("-------")
});
