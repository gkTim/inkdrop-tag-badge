# inkdrop-tag-badge

A plugin for [Inkdrop](https://www.inkdrop.info/) to allow to create tag badges.

![usage example](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/screenshot.png)

## Install

```sh
ipm install tag-badge
```

## Usage

| Syntax        | Result                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| [[Default]]   | ![Default badge](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/default-badge.png) |
| [[s:Success]] | ![Success badge](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/success-badge.png) |
| [[e:Error]]   | ![Error badge](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/error-badge.png)     |
| [[w:Warning]] | ![Warning badge](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/warning-badge.png) |
| [[i:Info]]    | ![Warning badge](https://raw.githubusercontent.com/gktim/inkdrop-tag-badge/master/assets/info-badge.png)    |

## Compatibility

Keep in mind that tag badge is not part of the official [CommonMark](https://spec.commonmark.org/) or [Github Flavored Markdown](https://github.github.com/gfm/) specification. Therefore using the `[[]]` syntax to create a tag badge might be ignored by other Markdown readers and as a result carry over to the rendered text.

## Theming support

Theme developers can use the following CSS selectors for styling.

| Selector                 | Description        |
| ------------------------ | ------------------ |
| `.mde-preview div.tag`   | Default tag badge. |
| `.mde-preview div.tag.s` | Success tag badge. |
| `.mde-preview div.tag.e` | Error tag badge.   |
| `.mde-preview div.tag.w` | Warning tag badge. |
| `.mde-preview div.tag.i` | Info tag badge.    |
