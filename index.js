"use strict";

var postcss = require("postcss");
var keyframes = JSON.parse(require("fs").readFileSync("data.json","utf-8"));

module.exports = postcss.plugin("postcss-animation", function () {
  return function (css) {

    // Run handlers through all relevant CSS decls

    css.walkDecls("animation-name", function(decl) {
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, keyframes[decl.value]);

    });

  };
});
