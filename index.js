'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-animation', function () {
  return function (css) {

    /**
     * animation-name: bounce; rule handler
     * @param  {string} decl  current decleration
     */
    var bounce = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounce { from, 20%, 53%, 80%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);transform: translate3d(0,0,0);}40%, 43% {animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);transform: translate3d(0, -30px, 0);}70% {animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);transform: translate3d(0, -15px, 0);}90% {transform: translate3d(0,-4px,0);}}');
    };

    /**
     * animation-name: flash; rule handler
     * @param  {string} decl  current decleration
     */
    var flash = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes flash { from, 50%, to {opacity: 1; } 25%, 75% {opacity: 0; }}');
    };

    /**
     * animation-name: pulse; rule handler
     * @param  {string} decl  current decleration
     */
    var pulse = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes pulse {from {transform: scale3d(1, 1, 1);}50% {transform: scale3d(1.05, 1.05, 1.05);}to {transform: scale3d(1, 1, 1);}}');
    };

    /**
     * animation-name: rubberBand; rule handler
     * @param  {string} decl  current decleration
     */
    var rubberBand = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes rubberBand {from {transform: scale3d(1, 1, 1);}30% {transform: scale3d(1.25, 0.75, 1);}40% {transform: scale3d(0.75, 1.25, 1);}50% {transform: scale3d(1.15, 0.85, 1);}65% {transform: scale3d(.95, 1.05, 1);}75% {transform: scale3d(1.05, .95, 1);}to {transform: scale3d(1, 1, 1);}}');
    };

    /**
     * animation-name: shake; rule handler
     * @param  {string} decl  current decleration
     */
    var shake = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes shake {from, to {transform: translate3d(0, 0, 0);}10%, 30%, 50%, 70%, 90% {transform: translate3d(-10px, 0, 0);}20%, 40%, 60%, 80% {transform: translate3d(10px, 0, 0);}}');
    };

    /**
     * animation-name: swing; rule handler
     * @param  {string} decl  current decleration
     */
    var swing = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes swing {20% {transform: rotate3d(0, 0, 1, 15deg);}40% {transform: rotate3d(0, 0, 1, -10deg);}60% {transform: rotate3d(0, 0, 1, 5deg);}80% {transform: rotate3d(0, 0, 1, -5deg);}to {transform: rotate3d(0, 0, 1, 0deg);}}');
    };

    /**
     * animation-name: tada; rule handler
     * @param  {string} decl  current decleration
     */
    var tada = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes tada {from {transform: scale3d(1, 1, 1);}10%, 20% {transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);}30%, 50%, 70%, 90% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);}40%, 60%, 80% {transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);}to {transform: scale3d(1, 1, 1);}}');
    };

    /**
     * animation-name: wobble; rule handler
     * @param  {string} decl  current decleration
     */
    var wobble = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes wobble {from {transform: none;}15% {transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);}30% {transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);}45% {transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);}60% {transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);}75% {transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);}to {transform: none;}}');
    };

    /**
     * animation-name: jello; rule handler
     * @param  {string} decl  current decleration
     */
    var jello = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes jello {from, 11.1%, to {transform: none;}22.2% {transform: skewX(-12.5deg) skewY(-12.5deg);}33.3% {transform: skewX(6.25deg) skewY(6.25deg);}44.4% {transform: skewX(-3.125deg) skewY(-3.125deg);}55.5% {transform: skewX(1.5625deg) skewY(1.5625deg);}66.6% {transform: skewX(-0.78125deg) skewY(-0.78125deg);}77.7% {transform: skewX(0.390625deg) skewY(0.390625deg);}88.8% {transform: skewX(-0.1953125deg) skewY(-0.1953125deg);}}');
    };

    /**
     * animation-name: bounceIn; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceIn = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceIn {from, 20%, 40%, 60%, 80%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}0% {opacity: 0;transform: scale3d(.3, .3, .3);}20% {transform: scale3d(1.1, 1.1, 1.1);}40% {transform: scale3d(.9, .9, .9);}60% {opacity: 1;transform: scale3d(1.03, 1.03, 1.03);}80% {transform: scale3d(.97, .97, .97);}to {opacity: 1;transform: scale3d(1, 1, 1);}}');
    };

    /**
     * animation-name: bounceInDown; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceInDown = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceInDown {from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}0% {opacity: 0;transform: translate3d(0, -3000px, 0);}60% {opacity: 1;transform: translate3d(0, 25px, 0);}75% {transform: translate3d(0, -10px, 0);}90% {transform: translate3d(0, 5px, 0);}to {transform: none;}}');
    };

    /**
     * animation-name: bounceInLeft; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceInLeft = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceInLeft {from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}0% {opacity: 0;transform: translate3d(-3000px, 0, 0);}60% {opacity: 1;transform: translate3d(25px, 0, 0);}75% {transform: translate3d(-10px, 0, 0);}90% {transform: translate3d(5px, 0, 0);}to {transform: none;}}');
    };

    /**
     * animation-name: bounceInRight; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceInRight = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceInRight {from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}from {opacity: 0;transform: translate3d(3000px, 0, 0);}60% {opacity: 1;transform: translate3d(-25px, 0, 0);}75% {transform: translate3d(10px, 0, 0);}90% {transform: translate3d(-5px, 0, 0);}to {transform: none;}}');
    };

    /**
     * animation-name: bounceInUp; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceInUp = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceInUp {from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}from {opacity: 0;transform: translate3d(0, 3000px, 0);}60% {opacity: 1;transform: translate3d(0, -20px, 0);}75% {transform: translate3d(0, 10px, 0);}90% {transform: translate3d(0, -5px, 0);}to {transform: translate3d(0, 0, 0);}}');
    };

    /**
     * animation-name: bounceOut; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceOut = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceOut {20% {transform: scale3d(.9, .9, .9);}50%, 55% {opacity: 1;transform: scale3d(1.1, 1.1, 1.1);}to {opacity: 0;transform: scale3d(.3, .3, .3);}}');
    };

    /**
     * animation-name: bounceOutDown; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceOutDown = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceOutDown {20% {transform: translate3d(0, 10px, 0);}40%, 45% {opacity: 1;transform: translate3d(0, -20px, 0);}to {opacity: 0;transform: translate3d(0, 2000px, 0);}}');
    };

    /**
     * animation-name: bounceOutLeft; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceOutLeft = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceOutLeft {20% {opacity: 1;transform: translate3d(20px, 0, 0);}to {opacity: 0;transform: translate3d(-2000px, 0, 0);}}');
    };

    /**
     * animation-name: bounceOutRight; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceOutRight = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceOutRight {20% {opacity: 1;transform: translate3d(-20px, 0, 0);}to {opacity: 0;transform: translate3d(2000px, 0, 0);}}');
    };

    /**
     * animation-name: bounceOutUp; rule handler
     * @param  {string} decl  current decleration
     */
    var bounceOutUp = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes bounceOutUp {20% {transform: translate3d(0, -10px, 0);}40%, 45% {opacity: 1;transform: translate3d(0, 20px, 0);}to {opacity: 0;transform: translate3d(0, -2000px, 0);}}');
    };

    /**
     * animation-name: fadeInDown; rule handler
     * @param  {string} decl  current decleration
     */
    var fadeInDown = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes fadeInDown {from {opacity: 0;transform: translate3d(0, -100%, 0);}to {opacity: 1;transform: none;}}');
    };

    /**
     * animation-name: fadeIn; rule handler
     * @param  {string} decl  current decleration
     */
    var fadeIn = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes fadeIn {from {opacity: 0;}to {opacity: 1;}}');
    };

    /**
     * animation-name: fadeInDownBig; rule handler
     * @param  {string} decl  current decleration
     */
    var fadeInDownBig = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes fadeInDownBig {from {opacity: 0;transform: translate3d(0, -2000px, 0);}to {opacity: 1;transform: none;}}');
    };

    /**
     * animation-name: fadeInLeft; rule handler
     * @param  {string} decl  current decleration
     */
    var fadeInLeft = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes fadeInLeft {from {opacity: 0;transform: translate3d(-100%, 0, 0);}to {opacity: 1;transform: none;}}');
    };

    /**
     * animation-name: fadeInLeftBig; rule handler
     * @param  {string} decl  current decleration
     */
    var fadeInLeftBig = function(decl){
      var thisRule = decl.parent;
      thisRule.parent.insertAfter(thisRule, '@keyframes fadeInLeftBig {from {opacity: 0;transform: translate3d(-2000px, 0, 0);}to {opacity: 1;transform: none;}}');
    };


    // Run handlers through all relevant CSS decls

    css.walkDecls('animation-name', function(decl) {

      switch (decl.value) {

        case 'bounce':
          bounce(decl);
          break;

        case 'flash':
          flash(decl);
          break;

        case 'pulse':
          pulse(decl);
          break;

        case 'rubberBand':
          rubberBand(decl);
          break;

        case 'shake':
          shake(decl);
          break;

        case 'swing':
          swing(decl);
          break;

        case 'tada':
          tada(decl);
          break;

        case 'wobble':
          wobble(decl);
          break;

        case 'jello':
          jello(decl);
          break;

        case 'bounceIn':
          bounceIn(decl);
          break;

        case 'bounceInDown':
          bounceInDown(decl);
          break;

        case 'bounceInLeft':
          bounceInLeft(decl);
          break;

        case 'bounceInRight':
          bounceInRight(decl);
          break;

        case 'bounceInUp':
          bounceInUp(decl);
          break;

        case 'bounceOut':
          bounceOut(decl);
          break;

        case 'bounceOutDown':
          bounceOutDown(decl);
          break;

        case 'bounceOutLeft':
          bounceOutLeft(decl);
          break;

        case 'bounceOutRight':
          bounceOutRight(decl);
          break;

        case 'bounceOutUp':
          bounceOutUp(decl);
          break;

        case 'fadeInDown':
          fadeInDown(decl);
          break;

        case 'fadeIn':
          fadeIn(decl);
          break;

        case 'fadeInDownBig':
          fadeInDownBig(decl);
          break;

        case 'fadeInLeft':
          fadeInLeft(decl);
          break;

        case 'fadeInLeftBig':
          fadeInLeftBig(decl);
          break;

      }

    });

  };
});
