# utilities.css
CSSのユーティリティクラスを生成するツールです。


## CSSクラス名の基本的な命名規則
```css
{breakpoint-name}-{property-name}-{value-name}{unit-name}-{imp}
```

|クラス名各パーツ|内容|
|:----|:----|
|`breakpoint-name`|ブレイクポイント名。`/src/_setting.scss`の$breakpointsで設定。|
|`property-name`|CSSプロパティ名|
|`value-name`|CSS値|
|`unit-name`|単位（%:`pct` \| `px` \| `em`）|
|`imp`|`!important`|


### CSSクラス名の各CSSプロパティ名`{property-name}`の一覧

|プロパティ|`{property-name}`|設定ファイル|
|:----|:----|:----|
|display|なし|`/src/utilites/_display.scss`|
|font-size|`fs`|`/src/utilites/_fs.scss`|
|font-weight|`fs`|`/src/utilites/_font.scss`|
|text-align|`text-align`|`/src/utilites/_text-align.scss`|
|width|`w`|`/src/utilites/_w.scss`|
|max-width|`max-w`|`/src/utilites/_max-w.scss`|
|min-width|`min-w`|`/src/utilites/_min-w.scss`|
|margin|`m`|`/src/utilites/_m.scss`|
|padding|`p`|`/src/utilites/_p.scss`|
|gap|`gap`|`/src/utilites/_gap.scss`|
|flex-basis|`basis`|`/src/utilites/_basis.scss`|
|flex-grow|`grow`|`/src/utilites/_grow.scss`|
|flex-shrink|`shrink`|`/src/utilites/_shrink.scss`|
|flex-wrap|`flex-wrap`|`/src/utilites/_flex-wrap.scss`|
|align-items|`items`|`/src/utilites/_items.scss`|
|align-self|`self`|`/src/utilites/_self.scss`|
|order|`order`|`/src/utilites/_order.scss`|
|justify-content|`justify`|`/src/utilites/_justify-content.scss`|
|justify-self|`justify-self`|`/src/utilites/_justify-self.scss`|


## CSSプロパティ値名`{value-name}`の一覧

### display
|基本クラス名|CSS宣言|
|:----|:----|
|display: block;|`.block`|
|display: inline;|`.inline`|
|display: inline-block;|`.inline-block`|
|display: flex;|`.flex`|
|display: grid;|`.grid`|
|display: none;|`.none`|


### font-size
|declaration（CSS宣言）|基本クラス名|
|:----|:----|
|font-size: 1px;|`.fs-1px`|
|font-size: 1em;|`.fs-1em`|


### font-weight
|declaration（CSS宣言）|基本クラス名|
|:----|:----|
|font-weight: 100;|`.font-thin`|
|font-weight: 200;|`.font-extralight`|
|font-weight: 300;|`.font-light`|
|font-weight: 400;|`.font-normal`|
|font-weight: 500;|`.font-medium`|
|font-weight: 600;|`.font-semibold`|
|font-weight: 700;|`.font-bold`|
|font-weight: 800;|`.font-extrabold`|
|font-weight: 900;|`.font-black`|


### text-align
|CSS宣言|基本クラス名|
|:----|:----|
|text-align: left;|`.text-align-left`|
|text-align: center;|`.text-align-center`|
|text-align: right;|`.text-align-right`|
|text-align: justify;|`.text-align-justify`|


### width
|CSS宣言|基本クラス名|
|:----|:----|
|width: auto;|`.w-auto`|
|width: 1px;|`.w-1px`|
|width: 1%;|`.w-1pct`|
|width: 1em;|`.w-1em`|


### max-width
|CSS宣言|基本クラス名|
|:----|:----|
|max-width: 1px;|`.max-w-1px`|
|max-width: 1%;|`.max-w-1pct`|


### min-width
|CSS宣言|基本クラス名|
|:----|:----|
|min-width: 1px;|`.min-w-1px`|
|min-width: 1%;|`.min-w-1pct`|


### margin
|CSS宣言|基本クラス名|
|:----|:----|
|margin: auto;|`.m-auto`|
|margin: 1px;|`.m-1px`|
|margin: 1%;|`.m-1pct`|
|margin-top: auto;|`.mt-auto`|
|margin-top: 1px;|`.mt-1px`|
|margin-top: 1%;|`.mt-1pct`|
|margin-right: auto;|`.mr-auto`|
|margin-right: 1px;|`.mr-1px`|
|margin-right: 1%;|`.mr-1pct`|
|margin-bottom: auto;|`.mb-auto`|
|margin-bottom: 1px;|`.mb-1px`|
|margin-bottom: 1%;|`.mb-1pct`|
|margin-left: auto;|`.ml-auto`|
|margin-left: 1px;|`.ml-1px`|
|margin-left: 1%;|`.ml-1pct`|
|margin-inline: auto;|`.minline-auto`|
|margin-inline: 1px;|`.minline-1px`|
|margin-inline: 1%;|`.minline-1pct`|
|margin-block: auto;|`.mblock-auto`|
|margin-block: 1px;|`.mblock-1px`|
|margin-block: 1%;|`.mblock-1pct`|


### padding
|CSS宣言|基本クラス名|
|:----|:----|
|padding: 1px;|`.p-1px`|
|padding: 1%;|`.p-1pct`|
|padding-top: 1px;|`.pt-1px`|
|padding-top: 1%;|`.pt-1pct`|
|padding-right: 1px;|`.pr-1px`|
|padding-right: 1%;|`.pr-1pct`|
|padding-bottom: 1px;|`.pb-1px`|
|padding-bottom: 1%;|`.pb-1pct`|
|padding-left: 1px;|`.pl-1px`|
|padding-left: 1%;|`.pl-1pct`|
|padding-inline: 1px;|`.pinline-1px`|
|padding-inline: 1%;|`.pinline-1pct`|
|padding-block: 1px;|`.pblock-1px`|
|padding-block: 1%;|`.pblock-1pct`|


### gap
|CSS宣言|基本クラス名|
|:----|:----|
|gap: 1px;|`.gap-1px`|
|gap: 1%;|`.gap-1pct`|
|column-gap: 1px;|`.column-gap-1px`|
|column-gap: 1%;|`.column-gap-1pct`|
|row-gap: 1px;|`.row-gap-1px`|
|row-gap: 1%;|`.row-gap-1pct`|


### flex-basis
|CSS宣言|基本クラス名|
|:----|:----|
|flex-basis: auto;|`.basis-auto`|
|flex-basis: 0;|`.basis-0`|
|flex-basis: 1px;|`.basis-1px`|
|flex-basis: 1%;|`.basis-1pct`|
|flex-basis: 1em;|`.basis-1em`|


### flex-grow
|CSS宣言|基本クラス名|
|:----|:----|
|flex-grow: auto;|`.grow-auto`|
|flex-grow: 0;|`.grow-0`|


### flex-shrink
|CSS宣言|基本クラス名|
|:----|:----|
|flex-shrink: auto;|`.shrink-auto`|
|flex-shrink: 0;|`.shrink-0`|


### flex-wrap
|CSS宣言|基本クラス名|
|:----|:----|
|flex-wrap: nowrap;|`.flex-wrap-nowrap`|
|flex-wrap: wrap;|`.flex-wrap-wrap`|
|flex-wrap: wrap-reverse;|`.flex-wrap-wrap-reverse`|


### align-items
|CSS宣言|基本クラス名|
|:----|:----|
|align-items: start;|`.items-start`|
|align-items: end;|`.items-end`|
|align-items: center;|`.items-center`|
|align-items: baseline;|`.items-baseline`|
|align-items: stretch;|`.items-stretch`|


### align-self
|CSS宣言|基本クラス名|
|:----|:----|
|align-self: start;|`.self-start`|
|align-self: end;|`.self-end`|
|align-self: center;|`.self-center`|
|align-self: baseline;|`.self-baseline`|
|align-self: stretch;|`.self-stretch`|


### order
|CSS宣言|基本クラス名|
|:----|:----|
|order: 1;|`.order-1`|


### justify-content
|CSS宣言|基本クラス名|
|:----|:----|
|justify-content: flex-start;|`.justify-flex-start`|
|justify-content: flex-end;|`.justify-flex-end`|
|justify-content: center;|`.justify-center`|
|justify-content: space-between;|`.justify-space-between`|
|justify-content: space-around;|`.justify-space-around`|
|justify-content: space-evenly;|`.justify-space-evenly`|
|justify-content: stretch;|`.justify-stretch`|
|justify-content: baseline;|`.justify-baseline`|
|justify-content: normal;|`.justify-normal`|


### justify-self
|CSS宣言|基本クラス名|
|:----|:----|
|justify-self: auto;|`.justify-self-auto`|
|justify-self: start;|`.justify-self-start`|
|justify-self: end;|`.justify-self-end`|
|justify-self: center;|`.justify-self-center`|
|justify-self: stretch;|`.justify-self-stretch`|


## CSSの生成＆設定ファイル
`/src/_setting.scss`で数値の範囲設定が可能です。
