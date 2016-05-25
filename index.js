"use strict";

var postcss = require("postcss");
var keyframes = require("postcss-animation-data");

module.exports = postcss.plugin("postcss-animation", function (options) {
  options = options || {}

  return function (css) {

    // Run handlers through all relevant CSS decls

    css.walkDecls("animation-name", function(decl) {
    	var thisRule = decl.parent;
      if (!keyframes[decl.value]){
        return;
      }

      options.atRoot ? css.append(keyframes[decl.value])
                     : thisRule.parent.insertAfter(thisRule, keyframes[decl.value]);
    });

    css.walkDecls("animation", function(decl) {
      var thisRule = decl.parent;
      var values = postcss.list.space(decl.value);
      values.forEach(function (value) {
        if (!keyframes[value]){
          return;
        }else{
          options.atRoot ? css.append(keyframes[decl.value])
                         : thisRule.parent.insertAfter(thisRule, keyframes[value]);
        }
      });
    });

  };
});
