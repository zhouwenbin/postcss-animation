"use strict";

var postcss = require("postcss");
var keyframes = require("postcss-animation-data");

module.exports = postcss.plugin("postcss-animation", function () {
  return function (css) {

    // Run handlers through all relevant CSS decls

    css.walkDecls("animation-name", function(decl) {
    	var thisRule = decl.parent; 
		if (!keyframes[decl.value]){
			return;
		}

    	thisRule.parent.insertAfter(thisRule, keyframes[decl.value]);
    });

  };
});