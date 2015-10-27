# CSSgram

Instagram filter library in Sass and CSS.

## Usage

There are currently 2 ways to consume this library:

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

## Current Filters

- [x] Aden
- [x] Reyes
- [x] Perpetua
- [x] Inkwell
- [x] Earlybird
- [x] Toaster
- [x] Walden
- [x] Hudson
- [x] Gingham
- [x] Mayfair
- [x] Lo-fi
- [x] X Pro II
- [x] 1977
- [x] Brooklyn
- [x] Crema

## Browser Support

This library uses [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). This features are supported in the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ | 32+ ✔ | 8+ ✔ |

For more information, check on [Can I Use](http://caniuse.com/).

## Contributing

1. Fork this repo
2. Clone the fork onto your system
3. `npm install` dependancies (must have Node installed)
4. Run `gulp` to compile CSS and the site
5. Make changes (see file structure outline below)
6. Submit a PR with a smile :smile:

## File Structure Outline

- `source/css/cssgram.css` contains each of the css classes you can apply to your `<img>` to give it the filter. You should use `source/css/cssgram.min.css` for production if you want access to all of the
- `source/scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- site is the public facing website

Note: this will also have mixin options and a PostCSS Component.
