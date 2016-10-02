![](http://una.im/CSSgram/img/cssgram-logo.png)

# CSSgram

Instagram filter library in Sass and CSS.

## What is This?

Simply put, CSSgram is a library for editing your images with Instagram-like filters directly in CSS. What we’re doing here is adding filters to the images as well as applying color and/or gradient overlays via various blending techniques to mimic these effects. This means *less manual image processing* and more fun filter effects on the web!

We are using pseudo-elements (i.e. `::before` and `::after`) to create the filter effects, so you must apply these filters on a containing element (i.e. not a *replaced element* like `<img>`). The recommendation is to wrap your images in a `<figure>` tag. More about the tag [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

## Browser Support

This library uses [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). These features are supported in the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/kQ1e7Mk.png" width="45px" height="45px" alt="Edge logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ |  13 ✔ | 32+ ✔ | 8+ ✔ |

For more information, check on [Can I Use](http://caniuse.com/#feat=css-filters).

## Usage

**There are currently 2 ways to consume this library:**

### Use CSS classes

When using CSS classes, you can simply add the class with the filter name to the element containing your image.

  1. Include the CDN link in your `<head>` tag: `<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">`
  * Alternatively, you can [download the CSSgram library](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css) locally and link to the it within your project: `<link rel="stylesheet" href="css/vendor/cssgram.min.css">`
  * Add a class to your image element with the name of the filter you would like to use

For example:

```html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```

Alternatively, you can just download and link to any individual css file (e.g. `<link rel="stylesheet" href="css/vendor/aden.min.css">`), if you’re just using one of the styles.

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
*   Nashville: `class="nashville"`
*   Lark: `class="lark"`
*   Moon: `class="moon"`
*   Clarendon: `class="clarendon"`
*   Willow: `class="willow"`

* * *

### Use Sass `@extend` or `@mixin`

If you use custom naming in your CSS architecture, you can add the `.scss` files for the provided styles within your project and then `@extend` the filter effects within your style definitions. If you think extends are stupid, I will fight you 😊.

1. [Download the `scss/` folder contents](https://github.com/una/CSSgram/tree/master/source/scss)
* Include a link to `scss/cssgram.scss` via an `@import` statement in your Sass manifest file (i.e. `main.scss`). It may look like: `@import 'vendor/cssgram'`
* Extend the placeholder selector (e.g. `@extend %aden` or using mixins `@include aden()`) in your element.

For example:

```html
<!-- HTML -->
<figure class="viz--beautiful">
  <img src="../img.png">
</figure>
```

```sass
// Sass
.viz--beautiful {
  @extend %aden;
}
```

or using mixins (more flexible)

```
// Sass (without adding new CSS3 filters)
.viz--beautiful {
  @include aden();
}

// Sass (adding new CSS3 filters)
.viz--beautiful {
  @include aden(blur(2px) /*...*/);
}
```

Alternatively, you can just download and link any individual `.scss` file in your Sass manifest (i.e. `scss/aden.scss`), if you're just using one of the styles.

### Available Placeholders

_For use in Sass stylesheets:_

**Extends**

*   Aden: `@extend %aden`
*   Reyes: `@extend %reyes`
*   Perpetua: `@extend %perpetua`
*   Inkwell: `@extend %inkwell`
*   Toaster: `@extend %toaster`
*   Walden: `@extend %walden`
*   Hudson: `@extend %hudson`
*   Gingham: `@extend %gingham`
*   Mayfair: `@extend %mayfair`
*   Lo-fi: `@extend %lofi`
*   X-Pro II: `@extend %xpro2`
*   1977: `@extend %_1977`
*   Brooklyn: `@extend %brooklyn`
*   Nashville: `@extend %nashville`
*   Lark: `@extend %lark`
*   Moon: `@extend %moon`
*   Clarendon: `@extend %clarendon`
*   Willow: `@extend %willow`

**Mixins** (You can add more CSS3 filters as arguments)

*   Aden: `@include aden()`
*   Reyes: `@include reyes()`
*   Perpetua: `@include perpetua()`
*   Inkwell: `@include inkwell()`
*   Toaster: `@include toaster()`
*   Walden: `@include walden()`
*   Hudson: `@include hudson()`
*   Gingham: `@include gingham()`
*   Mayfair: `@include mayfair()`
*   Lo-fi: `@include lofi()`
*   X-Pro II: `@include xpro2()`
*   1977: `@include _1977()`
*   Brooklyn: `@include brooklyn()`
*   Nashville: `@include nashville()`
*   Lark: `@include lark()`
*   Moon: `@include moon()`
*   Clarendon: `@include clarendon()`
*   Willow: `@include willow()`

## Contributing

Either:

1. Create an [issue](https://github.com/una/CSSgram/issues)

Or:

1. Fork this repository
2. Clone the fork onto your system
3. `npm install` dependencies (must have Node installed)
4. Run `gulp` to compile CSS and the test site
5. Make changes and check the test site with your changes (see file structure outline below)
6. Submit a PR referencing the issue with a smile :smile:

If you’d like to contribute, the following filters are yet to be added:

- [ ] [Amaro](https://github.com/una/CSSgram/issues/13)
- [ ] [Ashby](https://github.com/una/CSSgram/issues/119)
- [ ] [Brannan](https://github.com/una/CSSgram/issues/120)
- [ ] [Charmes](https://github.com/una/CSSgram/issues/22)
- [ ] [Crema](https://github.com/una/CSSgram/issues/12)
- [ ] [Dogpatch](https://github.com/una/CSSgram/issues/122)
- [ ] [Ginza](https://github.com/una/CSSgram/issues/123)
- [ ] [Hefe](https://github.com/una/CSSgram/issues/17)
- [ ] [Helena](https://github.com/una/CSSgram/issues/124)
- [ ] [Juno](https://github.com/una/CSSgram/issues/125)
- [ ] [Kelvin](https://github.com/una/CSSgram/issues/20)
- [ ] [Ludwig](https://github.com/una/CSSgram/issues/126)
- [ ] [Maven](https://github.com/una/CSSgram/issues/127)
- [ ] [Rise](https://github.com/una/CSSgram/issues/15)
- [ ] [Sierra](https://github.com/una/CSSgram/issues/14)
- [ ] [Skyline](https://github.com/una/CSSgram/issues/128)
- [ ] [Slumber](https://github.com/una/CSSgram/issues/129)
- [ ] [Stinsen](https://github.com/una/CSSgram/issues/21)
- [ ] [Sutro](https://github.com/una/CSSgram/issues/19)
- [ ] [Valencia](https://github.com/una/CSSgram/issues/16)
- [ ] [Vesper](https://github.com/una/CSSgram/issues/130)

Filters are really fun to create! Reference photos created by [Miles Croxford](https://twitter.com/milescroxford) can be found [here](https://instagram.com/cssgram/).

## File Structure Outline

- `source/css/cssgram.css` contains each of the CSS classes you can apply to your `<img>` to give it the filter. You should use `source/css/cssgram.min.css` for production if you want access to all of the library
- `source/scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- `site/` is the public facing website
- `site/test` is how you test filters if you're developing, remember to change `is_done` for the filter you're creating in `site/filters.json`.

Note: this will also have mixin options and a PostCSS Component.
