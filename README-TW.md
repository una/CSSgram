![](http://una.im/CSSgram/img/cssgram-logo.png)

# CSSgram

一個使用 Sass/CSS 撰寫的 Instagram 濾鏡套件

## 這是什麼

Cssgram 是一個使用 CSS 給圖片加上類似 Instagram 效果的濾鏡套件。我們所做的就是通過改變各種各樣的[混合模式](http://www.w3cplus.com/css3/basics-css-blend-modes.html)顏色或者漸變所產生的效果運用到圖片上。這也就意味著*使用更少的人力來做圖片處理*，以及提供更多的有趣的效果。

我們使用虛擬元素 (比如 `::before` and  `::after`) 建立濾鏡效果，所以你必須在 img 外面套上一層標籤，我們建議你使用 `<figure>` 標籤來套上你的圖片。

## 瀏覽器支援

我們使用了 [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) 以及 [CSS Blend Modes](https://css-tricks.com/basics-css-blend-modes/). 瀏覽器的支援如下:

| <img src="http://i.imgur.com/NjIVmRO.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/0R5whqc.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/kQ1e7Mk.png" width="45px" height="45px" alt="Edge logo"> | <img src="http://i.imgur.com/FSJB8BL.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/yLwF24I.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 38+ ✔ | Nope ✘ |  13 ✔ | 32+ ✔ | 8+ ✔ |

你可以在這裡看到最新的瀏覽器的支援 [Can I Use](http://caniuse.com/#feat=css-filters).

## 如何使用
¼
**你可以使用下面兩種方法來使用CSSgram:**

### 使用 CSS Class

使用 css `class` 你可以輕鬆給你的圖片加上各式各樣的濾鏡

  1. 在你的 `<head>` 標籤中從 CDN 引入 css 資源 : `<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css"> `
  * 你也可直接下載 [CSSGram](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css) 到本地端，並且在專案中使用: `<link rel="stylesheet" href="css/vendor/cssgram.min.css">`
  * 把你想要套用的濾鏡類別套用到你的圖片元素上

例如:

``` html
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```

如果你只需要使用特定的濾鏡樣式，你也可以只單獨下載他們(例如 `<link rel="stylesheet" href="css/vendor/aden.min.css">`)

### 目前提供的濾鏡

你可以在 HTML 中直接使用:

*   Aden: `class="aden"`
*   Brannan: `class="brannan"`
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
*   Valencia: `class="valencia"`
*   Kelvin: `class="kelvin"`

* * *

### 使用 Sass `@extend` or `@mixin`

如果你希望自訂你的 css 命名，你可以把 `.scss` 檔引入到你的專案中來。然後你可以使用 `@extend` 在你希望定義的樣式中去使用這些濾鏡。

1. [下載 `scss/` 目錄內容](https://github.com/una/CSSgram/tree/master/source/scss)
* 使用`@import`將檔 `scss/cssgram.scss` 引入到你的主文件中來 (i.e. `main.scss`).
``` css
@import 'vendor/cssgram';
```
* 在需要的樣式上進行擴充 (e.g. `@extend %aden` or 使用 mixins `@include aden()`)。

例如:

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


或者使用 mixins (更有彈性)

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

當然，如果你只用到了某一個效果，這樣你也只需要引入對應的 `scss` 檔案即可 (`scss/aden.scss`)。

### 目前可用的效果

在Sass中使用:

**Extends**

*   Aden: `@extend %aden`
*   Brannan: `@extend %brannan`
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
*   Valencia: `@extend %valencia`
*   Kelvin: `@extend %kelvin`

**Mixins** (你可以加入更多的 css3 濾鏡進來)

*   Aden: `@include aden()`
*   Brannan: `@include brannan()`
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
*   Valencia: `@include valencia()`
*   Kelvin: `@include kelvin()`

## 如何參與專案貢獻


1. 開啟一個 [issue](https://github.com/una/CSSgram/issues)

或者:

1. Fork 這個專案
2. Clone 你自己的 repos
3. `npm install` 安裝相依性套件
4. 執行 `gulp` 命令進行 css 編譯
5. 現在你可以修改這些檔並檢視效果
6. 發起你的 PR 並且建立一個 issue 並附上一個 :smile:

製作這些效果是一件開心的事情，感謝 [Miles Croxford](https://twitter.com/milescroxford) 提供的[圖片] (https://instagram.com/cssgram/)

## 目錄結構

- `source/css/cssgram.css` 包含可以使用的濾鏡的 `class`，你可以在直接在你的開發環境使用，你也可以在正式環境使用壓縮過的檔案 `source/css/cssgram.min.css`
- `source/scss/` 包含了獨立的預設濾鏡用於你去擴充你的 CSS classes
- `site/` 存放網站
- `site/test` 用於測試檔案，如果在開發期間記得修改裡面的內容
- `is_done` 存放你自己所建立的濾鏡 `site/filters.json`

注意：我們也支援 mixin 選項以及 PostCSS Component
