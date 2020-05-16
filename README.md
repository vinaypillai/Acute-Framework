
# Acute Framework
The Acute Framework is a (relatively) lightweight Vue.js component framework designed for Bootstrap users who want a bit more control over their layouts.
*   [Installation](#installation)
*   [Add to Vue.js Projects](#add-to-vue.js-projects)
*   [Usage](#usage)
    *   [Grids](#grids)
    *   [Columns](#columns)
    *   [Breakpoints](#breakpoints)
    *   [Dropdowns](#dropdowns)
    *   [Buttons](#buttons)
        * [Variant](#variant)
        * [Block](#block)
        * [Outline](#outline)
        * [Pill](#pill)
        * [Round](#round)
    * [Semantic Colors](#semantic-colors)

## Installation

```bash 
npm install acute-framework
```

## Add to Vue.js Projects
```javascript
/* /src/main.js */ 
import Vue from 'vue' 
import App from './App.vue' 
.
.
.
import AcuteFramework from 'acute-framework'
Vue.use(AcuteFramework) 
```

## Usage

### Grids
The grid is the most basic component for layouts. Each grid can have 1-12 columns, and content within each column is positioned responsively through flexboxes.
```html
<ac-grid cols="12"></ac-grid>
```
The number of columns in each grid can be specified according to the [device size breakpoints](#breakpoints).
```html
<ac-grid cols="12" md-cols="6"></ac-grid>
```
The content in a grid can be aligned according to flex box alignment properties.
```html
<ac-grid cols="3" align-h="center" align-v="center"></ac-grid>
```
Possible values for `align-h`:
* `flex-start`
* `flex-end`
* `center`
* `space-between`
* `space-around`
* `initial`
* `inherit`

Possible values for `align-v`:
* `stretch`
* `flex-start`
* `flex-end`
* `center`
* `base-line`
* `initial`
* `inherit`

### Columns
Within a grid, content is divided into columns. The number of columns a grid contains is dependent on both the size of the grid and the columns.
```html
<ac-grid cols="4">
    <ac-col cols="1">Column 1</ac-col>
    <ac-col cols="1">Column 2</ac-col>
    <ac-col cols="1">Column 3</ac-col>
    <ac-col cols="1">Column 4</ac-col>
</ac-grid>
```
Columns don't have to be the same size. Each column can be sized independently based off
its content using the [device size breakpoints](#breakpoints).
```html
<ac-grid cols="5">
    <ac-col cols="3" md-cols="1">Column 1</ac-col>
    <ac-col cols="2" md-cols="4">Column 2</ac-col>
</ac-grid>
```
The number of columns can also be adjusted to match the size of the grid for a particular breakpoint. As long as the number of columns present is less than or equal to the number of columns specified by the grid, all the content will appear aligned in one row.
```html
<ac-grid cols="6" lg-cols="12">
    <ac-col cols="1" lg-cols="6">Column 1</ac-col>
    <ac-col cols="5" lg-cols="6">Column 2/ac-col>
</ac-grid>
```
In addition, columns can be offset to allow for different kinds of positioning within a row.
```html
<ac-grid cols="3" lg-cols="12">
    <ac-col cols="1" lg-cols="1" offset="1">Column 1</ac-col>
</ac-grid>
```

### Breakpoints
Content can be divided according to the following device width breakpoints:
|Name|Size|
|:--:|:--:|
|xs (default)| 0px|
|sm| 576px|
|md| 768px|
|lg|992px |
|xl|1200px|

The size listed is the minimum screen width for the breakpoint styles to take effect. Styling for xs devices is the default. As the screen size grows, styles for each successive breakpoint will supercede the previous one.

### Buttons
Many varieties of buttons are possible out of the box with the Acute Framework. There are five main properties involved in styling buttons:
* `variant`
* `block`
* `outline`
* `pill`
* `round`

#### Variant
The variant represents a buttons default color. Each of the [semantic colors](#semantic-colors) is a viable button variant.
```html
 <ac-button variant="primary"></ac-button>
```
#### Block
Block is a flag for a button's fill mode. A button with block fill will have a solid background according to the `variant`, and white text. On hover, the button will appear similar to a button with the [outline](#outline) flag. The default fill mode is `block`.
```html
 <ac-button variant="secondary" block></ac-button>
```
#### Outline
Outline is a flag for a button's fill mode. A button with outline fill will be transparent except for its `variant` colored text and a border. On hover, the button will appear similar to a button with the [block](#block) flag. 
```html
 <ac-button variant="success" outline></ac-button>
```
 
#### Pill
Pill is a flag for a button's shape. The `pill` flag will make the left and right sized of the button fully rounded over.
```html
 <ac-button variant="hazard" outline pill></ac-button>
```
#### Round
Pill is a flag for a button's shape. The `round` flag will make the button fully circular, with width set according to its content text.
```html
 <ac-button variant="danger" solid round></ac-button>
```

### Semantic Colors
There are five semantic colors in the Acute Framework. The colors are integrated across the various components.
|Name|Hexcode|
|:--:|:--:|
|primary|#009d46|
|secondary| #333333|
|success|#3498db|
|danger|#e55947|
|hazard|#bd7800|