# CSSgram

Instagram filter library in Sass and CSS. (This is a WIP)

## Usage

There are currently 2 ways to consume this library.

### Use Sass `@extends`

1. Include `scss/cssgram.scss` or any individual file (i.e. `scss/aden.scss`) into your Sass manifest
2. Extend the silent placeholder selector `@extend %aden;` in your element.

For example:

```html
<!-- HTML -->
<figure class="viz--beautiful">
  <img src="../img.png" alt="">
</figure>
```

```scss
// Sass
.viz--beautiful {
  @extend %aden;
}
```

### Use CSS classes

1. Link to the cssgram library: `<link rel="stylesheet" href="css/cssgram.min.css">` or any individual css file (i.e. `<link rel="stylesheet" href="css/aden.min.css">`)
2. Add a class to your image element with the name of the filter you would like to use

For example:

```html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png" alt="">
</figure>
```

## Current Filters

- [x] Aden
- [x] Reyes
- [x] Perpetua
- [x] Inkwell
- [x] Toaster
- [x] Gingham

## Contributing

1. Fork this repo
2. Clone the fork onto your system
3. `npm install` dependancies (must have Node installed)
4. Run `gulp` to compile CSS and the site
5. Make changes (see file structure outline below)
6. Submit a PR with a smile :smile:

## File Structure Outline

- `dist/cssgram.css` contains each of the css classes you can apply to your `<img>` to give it the filter
- `dist/cssgram.min.scss` is a minified file with each of the filters
- `scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- site is in the gh-pages branch (Note to self, pushing the site subtree is like this: `git subtree push --prefix site origin gh-pages`)

Note: this will also have mixin options and a PostCSS Component.