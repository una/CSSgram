![](http://una.im/CSSgram/img/cssgram-logo.png)

# CSSgram
[![CDNJS](https://img.shields.io/cdnjs/v/cssgram.svg)](https://cdnjs.com/libraries/cssgram)

CSSGram is an Instagram filter library written in Sass and CSS.

## What is This?

Simply put, CSSgram is a library for editing your images with Instagram-like filters directly using CSS. What we're doing is adding filters to the images, as well as applying color and/or gradient overlays via various blending techniques to mimic filter effects. This means *less manual image processing* and more fun filter effects on the web!

We're using pseudo-elements (i.e. `::before` and `::after`) to create the filter effects, so you must apply these filters on a containing element (i.e. not a *replaced element* like `<img>`). The recommendation is to wrap your images in a `<figure>` tag. More about the tag [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

## Browser Support

This library uses [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). These features are supported in the following browsers:

| <img src="http://i.imgur.com/NjIVmRO.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/0R5whqc.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/kQ1e7Mk.png" width="45px" height="45px" alt="Edge logo"> | <img src="http://i.imgur.com/FSJB8BL.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/yLwF24I.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ |  13 ✔ | 32+ ✔ | 8+ ✔ |

For more information, check on [Can I Use](http://caniuse.com/#feat=css-filters).

## Usage

**There are currently 2 ways to consume this library:**

### Use CSS classes

When using CSS classes, you can simply add the class with the filter name to the element containing your image.

  1. Include the CDN link in your `<head>` tag: `<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">`. We're also on [CDNJS](https://cdnjs.com/libraries/cssgram) which means another option is `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css">`
  * Alternatively, you can [download the CSSgram library](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css) locally and link to the it within your project: `<link rel="stylesheet" href="css/vendor/cssgram.min.css">`
  * Add a class to your image element with the name of the filter you would like to use

For example:

```html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```

Alternatively, you can just download and link to any individual css file (e.g. `<link rel="stylesheet" href="css/vendor/aden.min.css">`) if you're using only one of the styles.

### Available Classes

_For use in HTML markup:_

*   1977: `class="_1977"`
*   Aden: `class="aden"`
*   Amaro: `class="amaro"`
*   Brannan: `class="brannan"`
*   Brooklyn: `class="brooklyn"`
*   Clarendon: `class="clarendon"`
*   Gingham: `class="gingham"`
*   Hudson: `class="hudson"`
*   Inkwell: `class="inkwell"`
*   Kelvin: `class="kelvin"`
*   Lark: `class="lark"`
*   Lo-fi: `class="lofi"`
*   Mayfair: `class="mayfair"`
*   Moon: `class="moon"`
*   Nashville: `class="nashville"`
*   Perpetua: `class="perpetua"`
*   Reyes: `class="reyes"`
*   Rise: `class="rise"`
*   Slumber: `class="slumber"`
*   Stinson: `class="stinson"`
*   Toaster: `class="toaster"`
*   Valencia: `class="valencia"`
*   Walden: `class="walden"`
*   Willow: `class="willow"`
*   X-Pro-2: `class="xpro2"`

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

Alternatively, if you're using only one of the styles, you can download and link any individual `.scss` file in your Sass manifest (i.e. `scss/aden.scss`).

### Available Placeholders

_For use in Sass stylesheets:_

**Extends**

*   1977: `@extend %_1977`
*   Aden: `@extend %aden`
*   Amaro: `@extend %amaro`
*   Brannan: `@extend %brannan`
*   Brooklyn: `@extend %brooklyn`
*   Clarendon: `@extend %clarendon`
*   Gingham: `@extend %gingham`
*   Hudson: `@extend %hudson`
*   Inkwell: `@extend %inkwell`
*   Kelvin: `@extend %kelvin`
*   Lark: `@extend %lark`
*   Lo-fi: `@extend %lofi`
*   Mayfair: `@extend %mayfair`
*   Moon: `@extend %moon`
*   Nashville: `@extend %nashville`
*   Perpetua: `@extend %perpetua`
*   Reyes: `@extend %reyes`
*   Rise: `@extend %rise`
*   Slumber: `@extend %slumber`
*   Stinson: `@extend %stinson`
*   Toaster: `@extend %toaster`
*   Valencia: `@extend %valencia`
*   Walden: `@extend %walden`
*   Willow: `@extend %willow`
*   X-Pro-2: `@extend %xpro2`

**Mixins** (You can add more CSS3 filters as arguments)

*   1977: `@include _1977()`
*   Aden: `@include aden()`
*   Amaro: `@include amaro()`
*   Brannan: `@include brannan()`
*   Brooklyn: `@include brooklyn()`
*   Clarendon: `@include clarendon()`
*   Gingham: `@include gingham()`
*   Hudson: `@include hudson()`
*   Inkwell: `@include inkwell()`
*   Kelvin: `@include kelvin()`
*   Lark: `@include lark()`
*   Lo-fi: `@include lofi()`
*   Mayfair: `@include mayfair()`
*   Moon: `@include moon()`
*   Nashville: `@include nashville()`
*   Perpetua: `@include perpetua()`
*   Reyes: `@include reyes()`
*   Rise: `@include rise()`
*   Slumber: `@include slumber()`
*   Stinson: `@include stinson()`
*   Toaster: `@include toaster()`
*   Valencia: `@include valencia()`
*   Walden: `@include walden()`
*   Willow: `@include willow()`
*   X-Pro-2: `@include xpro2()`

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

Filters are really fun to create! Reference photos created by [Miles Croxford](https://twitter.com/milescroxford) can be found [here](https://instagram.com/cssgram/).

## File Structure Outline

- `source/css/cssgram.css` contains each of the CSS classes you can apply to your `<img>` to give it the filter. You should use `source/css/cssgram.min.css` for production if you want access to all of the library
- `source/scss/` contains the source files for individual classes and placeholder selectors you can use to extend CSS classes in Sass
- `site/` is the public facing website
- `site/test` is how you test filters if you're developing, remember to change `is_done` for the filter you are creating in `site/filters.json`.

Note: This will also have mixin options and a PostCSS Component.
