# CSSgram

Instagram filter library in Sass and CSS.

This is a WIP.

## Usage

There are 3 ways to consume this library.

1. Use Sass `@mixins` (include `scss/main.scss` and @include filter(<filtername>))
2. Use Sass `@extends` (include `scss/main.scss` or any individual file (i.e. `scss/aden.scss))
3. Use CSS classes (include `dist/css/main.min.css` and add a class to your image element with the name of the filter you would like to use)

## File Structure Outline

- `dist/main.css` contains each of the css classes you can apply to your `<img>` to give it the filter
- `dist/main.min.scss` is a minified file with each of the filters
- `scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass

## Current Filters

- [x] Aden
- [x] Reyes
- [x] Perpetua
- [x] Inkwell

Note: this will also have a PostCSS Component.