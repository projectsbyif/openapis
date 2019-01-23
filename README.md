# Open APIs

## Contents

* [What is this?](#what-is-this)
* [Installation](#installation)
* [Usage](#usage)
* [Publishing](#publishing)

## What is this?

In collaboration with the Open Data Institute, IF researched how open APIs in the telecoms sector could lead to new classes of commercial products.

It is available at https://openapis.projectsbyif.com/.

## Installation

This repo can be cloned by using `git clone git@github.com:projectsbyif/openapis.git` and installed by using `npm install`.

## Usage

Here's what you need to know to use this template:

* Before you start working, in Terminal, use `cd` to move into where the repository is saved on your machine.

* Type `node index.js` to build the static site into the `public/` folder.

* You can use an HTTP server like [http-server](https://www.npmjs.com/package/http-server) to view the site locally.

* In `settings.yaml`, you can change various things about the entire website.

* Most importantly, under `pages:` in `settings.yaml`, you can define the titles and order of each page. For example:

  ```
  pages:
    - This isn't my beautiful house
    - This will be page two
    - This will be the last page
  ```

* In the `pages` folder, you can add Markdown files that represent each page. The filename should be a [slugified](https://en.wikipedia.org/wiki/Semantic_URL#Slug) version of the page title, and should end in `.md`.

* For example, for a page called `This isn't my beautiful house`, the Markdown file should be called `this-isnt-my-beautiful-house.md`.

* You don't need to add the title in the Markdown page, it will be added automatically from `settings.yaml`.

* If you're having problems with disappeared pages, check the Markdown filename against the pages written in `settings.yaml`.

### Sizes

Images used in longforms should have a maximum width or height of *1280px* and a standard resolution of *72 dpi*.

### Embedding images

Including images in GitHub repositories makes them slugish. Instead:

1. Log into the [IF CMS](https://projectsbyif.com/admin/login).

2. On the sidebar, click "Assets".

3. Click "Longform Assets".

4. Click "Upload files", then choose an image to upload.

5. Find the uploaded image and put a tick next to it.

6. Click the cog icon, then clikck "View asset".

7. Copy the image URL.

8. In your Markdown document, include an image like this:

```
![This is a description of the image](https://example.com/files/image.png)
```

### Alt tags

These are bits of text that accompany the code to embed images in pages, useful for people that use screen readers. [WebAIM gives this advice](http://webaim.org/techniques/alttext/) for writing alt tags:

* Try to convey the meaning of the image through words
* Don’t write more than a sentence where possible
* Don’t reuse text from the content of a page
* Don’t describe the image as an image

## Publishing

This site is hosted using Netlify. Changes to the `master` branch will automatically deploy the published site.
