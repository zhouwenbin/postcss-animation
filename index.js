"use strict";

var postcss = require("postcss");
var keyframes = require("postcss-animation-data");

module.exports = postcss.plugin("postcss-animation", function () {
  var hasKeyframes = [];

  function appendKeyframes(css,value){
    if (!keyframes[value] || hasKeyframes[value]){
      return;
    }
    if(!hasKeyframes[value]){
      hasKeyframes[value] = true;
      css.append(keyframes[value])
    }
  }

  return function (css) {

    hasKeyframes = [];

    css.walkDecls("animation-name", function(decl) {
      var thisRule = decl.parent;
      var value = decl.value;
      appendKeyframes(css,value);
    });

    css.walkDecls("animation", function(decl) {
      var thisRule = decl.parent;
      var values = postcss.list.space(decl.value);
      values.forEach(function (value) {
        appendKeyframes(css,value);
      });
    });
  };
});