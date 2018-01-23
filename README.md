If you've made a copy of this template, you should delete below the line and write a new README.

---

# IF Template for Longforms

## Contents

* [What is this?](#what-is-this)
* [Installation](#installation)
* [Usage](#usage)
* [Publishing](#publishing)

## What is this?

This is a Node.js app that contains a template for creating a IF-style longform microsite by editing a collection of Markdown files and a settings file.

## Installation

You should use [Template Launcher](https://github.com/projectsbyif/if-template-launcher) to automatically clone this repository to your machine and create an online copy on a projectsbyif.com subdomain. Alternatively, this can be cloned by using `git clone git@github.com:projectsbyif/if-template-longform.git <name of project>` and installed by using `npm install`.

## Usage

Here's what you need to know to use this template:

* Before you start working, in Terminal, use `cd` to move into where the repository is saved on your machine. For example, if it's in a folder called `some-repo-name` on your desktop, type `cd ~/Desktop/some-repo-name`.

* Type `gulp`, and you'll be able to view the longform at `http://localhost:3000`.

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

* You don't need to worry about restarting the server after making changes, just refresh your browser and you'll see changes immediately.

* To turn off the server, use `CTRL + C`.

### Starting the server locally

1. In Terminal, use `cd` to move into where the repository is saved on your machine.

2. Run `gulp` to start the server.

3. Go to `http://localhost:3000` in your browser.

## Images

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

### If you used Template Launcher

1. Wait for your changes to be merged into master, do it yourself (cheeky) or commit and push straight to master (even cheekier).

2. Make sure your local repository is up to date with the remote `master`.

3. Run `git push dokku master`.

4. Done.

### If you manually cloned this repository

1. In Terminal, log into the IF Dokku server with `ssh <username>@<if_server_address>`.

2. Type `dokku apps:create <new_subdomain>`.

3. Exit the IF Dokku server by typing `exit`.

4. Use `cd` to move into the folder where the template is stored locally.

5. Type `git remote add dokku dokku@<if_server_address>:<new_subdomain>`.

6. Type `git push dokku master`.

7. The website will be available at `http://<new_subdomain>.projectsbyif.com`.

8. To enable HTTPS, log back into the IF Dokku server with `ssh <username>@<if_server_address>`.

9. Type `dokku config:set --no-restart myapp DOKKU_LETSENCRYPT_EMAIL=<an_email_address>`.

10. Type `dokku letsencrypt <new_subdomain>`.

11. The website will now be available at `https://<new_subdomain>.projectsbyif.com`.

12. Use the instructions above this for pushing changes in master to the online version.
