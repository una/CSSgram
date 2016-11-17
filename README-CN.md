![](http://una.im/CSSgram/img/cssgram-logo.png)

# CSSgram

一个支持Instagram 滤镜库的 Sass/CSS框架,
## 这是什么？

简单来说，CSSgram 是一个直接使用CSS以类似Instagram的滤镜库来修改您的图片的库。我们所做的就是通过改变各种各样的[混合模式](http://www.w3cplus.com/css3/basics-css-blend-modes.html)颜色或者渐变所产生的效果运用到图片上。这也就减少手工图片处理，以及提供更多的有趣的网上的效果。

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

1  使用css 外链
``` bash
<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">
```

*你也可直接下载压缩的[CSS文件](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css) 。

 然后本地引用:
`<link rel="stylesheet" href="css/vendor/cssgram.min.css">
`

然后在你的元素添加class即可生效

案例:

``` html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```
接着，引入外部样式(e.g. `<link rel="stylesheet" href="css/vendor/aden.min.css">`)

### 目前提供的滤镜

你可以在html中直接使用:

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

如果你希望自定义你的css命名，你可以把`.scss` 文件引入到你的项目中来 。然后你可以使用`@extend`在你希望定义的样式中去使用这些滤镜。

1. [下载 `scss/` 目录内容](https://github.com/una/CSSgram/tree/master/source/scss)
*使用`@import`将文件 `scss/cssgram.scss` 引入到你的主文件中来 (i.e. `main.scss`).
``` css
@import 'vendor/cssgram';
```
*在需要的样式上进行扩展 (e.g. `@extend %aden` or 使用 mixins `@include aden()`)。

比如:

```html
<!-- HTML -->
<figure class="viz--beautiful">
  <img src="../img.png">
</figure>


// Sass
.viz--beautiful {
  @extend %aden;
}
```

或者使用 mixins (更加方便)

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

当然，如果你只用到了某一个效果，这样你也只需要引入对应`scss`文件即可(`scss/aden.scss`)。

### 目前可用的效果

在Scss中使用

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

**Mixins** (你可以加入更多的css3滤镜进来)

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

## 如何参与进来



1. 开启一个 [issue](https://github.com/una/CSSgram/issues)

或者:

1. Fork 这个项目
2. Clone 你自己的 repos
3. `npm install` 安装你自己的依赖
4. 输入`gulp`命令进行css编译
5. 现在你可以修改这些文件并查看效果
6. 发起你的PR并且创建一个issue 附带上一个 :smile:

下面这些效果正渴望你的加入完善:

- [ ] [Amaro](https://github.com/una/CSSgram/issues/13)
- [ ] [Ashby](https://github.com/una/CSSgram/issues/119)
- [x] [Brannan](https://github.com/una/CSSgram/issues/120)
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

制作这些效果是一件开心嗨皮的时期，感谢 [Miles Croxford](https://twitter.com/milescroxford) 提供的[图片] (https://instagram.com/cssgram/).

## 目录结构

- `source/css/cssgram.css` 包含可可以使用的滤镜的`class`;你也可以在你的生产环境中。你也可以在身长环境使用压缩的文件`source/css/cssgram.min.css`
- `source/scss/` 包含了独立的预置滤镜用于你去扩展你的CSS classes
- `site/` 存放的网站
- `site/test` 用于测试的文件，如果在开发期间记得修改里面的内容
- `is_done` 存放你自己所创建的滤镜 `site/filters.json`.

注意：我们也支持mixin 选项以及PostCSS Component.。
