![](http://una.im/CSSgram/img/cssgram-logo.png)

# CSSgram

一个支持Instagram 滤镜库的 Sass/CSS框架,
## 这是什么

Cssgram 是一个使用CSS给图片加上类似Instagram的滤镜库。我们所做的就是通过改变各种各样的[混合模式](http://www.w3cplus.com/css3/basics-css-blend-modes.html)颜色或者渐变所产生的效果运用到图片上。这也就意味着减少更少的图片处理，以及提供更多的有趣的效果。

我们使用伪类(i.e,`::before` and  `::after`)创建滤镜效果，这样你必须在img 外面包裹一层标签，我们建议你使用`figure`标签进行去包裹你的图片。


## 浏览器支持

我们使用了 [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) 以及 [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). 浏览器的支持如下:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/kQ1e7Mk.png" width="45px" height="45px" alt="Edge logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ |  13 ✔ | 32+ ✔ | 8+ ✔ |

你可以在这里看到最新的浏览器的支持 [Can I Use](http://caniuse.com/#feat=css-filters).

## 如何使用

**你可以使用下面两种方法来使用CSSgram:**

### 使用 CSS Class

使用`class`你可以轻松给你的图片添加各式各样的滤镜

1. 使用css 外链
 ``` bash
<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">
```
 *你也可直接下载压缩的[CSS文件](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css) 。
 然后本地引用:
``` bash
 <link rel="stylesheet" href="css/vendor/cssgram.min.css">
 ```
然后在你的元素添加class即可生效

案例:

```html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```
接着，引入外部样式(e.g. `<link rel="stylesheet" href="css/vendor/aden.min.css">`)

### 目前提供的滤镜

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

### 使用Sass `@extend` or `@mixin`

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
