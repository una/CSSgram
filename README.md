# CSSgram

Instagram filter library in Sass and CSS.

## What is This?

Simply put, CSSgram is a library for editing your images with Instagram-like filters directly in CSS. What we're doing here is adding filters to the images as well as applying color and/or gradient overlays via various blending techniques to mimic these effects. This means *less manual image processing* and more fun filter effects on the web!

We are using pseudo-elements (i.e. `:after`) to create the filter effects, so you must apply these filters on a containing element (i.e. not a content-block like `<img>`). The recommendation is to wrap your images in a [`<figure>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure). Keep in mind that the containing element must have the same width as the image itself, because overlay gradients are often applied.

## Browser Support

This library uses [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). This features are supported in the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ | 32+ ✔ | 8+ ✔ |

For more information, check on [Can I Use](http://caniuse.com/).

## Usage

**There are currently 2 ways to consume this library:**

### Use CSS classes

When using CSS classes, you can simply add the class with the filter name to the element containing your image.

  1. [Download the CSSgram Library](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css)
  * Link to the CSSgram library within your project:
    `<link rel="stylesheet" href="css/vendor/cssgram.min.css">`
  * Add a class to your image element with the name of the filter you would like to use

For example:

```
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```

Alternatively, you can just download and link to any individual css file:
`<link rel="stylesheet" href="css/vendor/aden.min.css">`, if you're just using one of the styles.

### Available Classes

_For use in HTML markup:_

*   Aden: `class="aden"`
*   Reyes: `class="reyes"`
*   Perpetua: `class="perpetua"`
*   Inkwell: `class="inkwell"`
*   Toaster: `class="toaster"`
*   Walden: `class="walden"`
*   Hudson: `class="hudson"`
*   Gingham: `class="gingham"`
*   Mayfair: `class="mayfair"`
*   Lo-fi: `class="lofi"`
*   X-Pro II: `class="xpro2"`
*   1977: `class="_1977"`
*   Brooklyn: `class="brooklyn"`

* * *

### Use Sass `@extends`

If you use custom naming in your CSS architecture, you can add the .scss files for the provided styles within your project and then `@extend` the filter effects within your style definitions. If you think extends are stupid, I will fight you 😊.

1. [Download the /scss folder contents](https://github.com/una/CSSgram/tree/master/source/scss)
* Include a link to `scss/cssgram.scss` via an import statement in your Sass manifest file (i.e. `main.scss`). It may look like: `@import 'vendor/cssgram';`
* Extend the silent placeholder selector `@extend %aden;` in your element.

For example:

```
<!-- HTML -->
<figure class="viz--beautiful">
  <img src="../img.png">
</figure>
```

```
// Sass
.viz--beautiful {
  @extend %aden;
}
```

Alternatively, you can just download and link any individual .scss file in your Sass manifest:
(i.e. `scss/aden.scss`), if you're just using one of the styles.

### Available Extends

_For use in Sass elements:_

*   Aden: `@extend %aden;`
*   Reyes: `@extend %reyes;`
*   Perpetua: `@extend %perpetua;`
*   Inkwell: `@extend %inkwell;`
*   Toaster: `@extend %toaster;`
*   Walden: `@extend %walden;`
*   Hudson: `@extend %hudson;`
*   Gingham: `@extend %gingham;`
*   Mayfair: `@extend %mayfair;`
*   Lo-fi: `@extend %lofi;`
*   X-Pro II: `@extend %xpro2;`
*   1977: `@extend %_1977;`
*   Brooklyn: `@extend %brooklyn;`

## Contributing

1. ~~Create an [issue](https://github.com/una/CSSgram/issues)~~ *Issues temporarily shut down due to a spam attack*
1. Fork this repo
2. Clone the fork onto your system
3. `npm install` dependancies (must have Node installed)
4. Run `gulp` to compile CSS and the site
5. Make changes (see file structure outline below)
6. Submit a PR referencing the issue with a smile :smile:

If you'd like to contribute, the following filters are yet to be added (again, listing them here because issues but are temporarily closed):

- [ ] Charmes
- [ ] Stinsen
- [ ] Kelvin
- [ ] Sutro
- [ ] Nashville
- [ ] Hefe
- [ ] Valencia
- [ ] Rise
- [ ] Sierra
- [ ] Amaro
- [ ] Crema

Filters are really fun to create! Reference photos created by [Miles Croxford](https://twitter.com/milescroxford) can be found [here](https://instagram.com/cssgram/).

## File Structure Outline

- `source/css/cssgram.css` contains each of the css classes you can apply to your `<img>` to give it the filter. You should use `source/css/cssgram.min.css` for production if you want access to all of the
- `source/scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- site is the public facing website

Note: this will also have mixin options and a PostCSS Component.
