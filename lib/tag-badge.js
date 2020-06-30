"use babel";

const { markdownRenderer } = require("inkdrop");
const mark = require("./remark-tag");

module.exports = {
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      "tag-badge:toggle": () => this.toggle(),
      "tag-badge:create-default": () => this.toggle(),
      "tag-badge:create-success": () => this.toggle("s"),
      "tag-badge:create-warning": () => this.toggle("w"),
      "tag-badge:create-error": () => this.toggle("e"),
      "tag-badge:create-info": () => this.toggle("i"),
    });

    return markdownRenderer.remarkPlugins.push(mark);
  },

  toggle(kind) {
    const cm = inkdrop.getActiveEditor().cm;
    if (cm.somethingSelected()) {
      const selection = cm.getSelection();

      if (/^\[\[[s|w|e|i]\:(.+)\]\]$/.test(selection)) {
        cm.replaceSelection(selection.slice(4, -2), "around");
      } else if (/^\[\[(.+)\]\]$/.test(selection)) {
        cm.replaceSelection(selection.slice(2, -2), "around");
      } else {
        if (kind) {
          cm.replaceSelection(`[[${kind}:${selection}]]`, "around");
        } else {
          cm.replaceSelection(`[[${selection}]]`, "around");
        }
      }
    } else {
      var offset = 2;

      if (kind) {
        cm.replaceSelection(`[[${kind}:]]`, "start");
        offset = 4;
      } else {
        cm.replaceSelection("[[]]", "start");
      }
      const { line, ch } = cm.getCursor();
      cm.setCursor({ line, ch: ch + offset });
    }
  },

  deactivate() {
    this.subscription.dispose();

    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        (plugin) => {
          return plugin !== mark;
        }
      );
    }
  },
};
