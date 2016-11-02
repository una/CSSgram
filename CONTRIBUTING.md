# Contributing

Contributions are **welcome**!

## Procedure 1

1. Look if there is an existing [issue](https://github.com/una/CSSgram/issues) for your case. 
2. If there isn't an existing issue, then create one.

## Procedure 2

1. Fork this repository
2. Clone the fork onto your system
3. `npm install` dependencies (must have Node installed)
4. Run `gulp` which starts dev server, watches and does compilations to .dev folder
**In master:**
**gulp build**: does compilation, files are generated in the respective folders
**gulp server**: starts server in root to view compiled files after master build
5. Make changes (e.g. edit the .scss file related to the filter) and check the test site with your changes (see file structure outline below)
6. Submit a PR referencing the issue with a smile :smile:

Filters are really fun to create! Reference photos created by [Miles Croxford](https://twitter.com/milescroxford) can be found [here](https://instagram.com/cssgram/).

## File Structure Outline

- `source/css/cssgram.css` contains each of the CSS classes you can apply to your `<img>` to give it the filter. You should use `source/css/cssgram.min.css` for production if you want access to all of the library
- `source/scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- `site/` is the public facing website
- `site/test` is how you test filters if you're developing, remember to change `is_done` for the filter you are creating in `site/filters.json`.

Note: This will also have mixin options and a PostCSS Component.

