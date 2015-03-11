/**
 * css-naked-day.js
 * Copyright © 2015 Johnie Hjelm
 */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    exports.cssNakedDay = factory();
  } else {
    root.cssNakedDay = factory();
  }
}(this, function () {
  return {

    getNaked: function(date) {
      var dateString = date;
      var month      = (dateString.getMonth() + 1);
      var day        = (dateString.getDate());

      return (month === 4 && day === 9);
    },

    init: function(date, naked) {
      if(!date instanceof Date) {
        throw new Error('Invalid date format. Use new Date()');
      }
      date  = date || new Date();
      naked = this.getNaked(date);
      if ( naked ) {
        var css = document.styleSheets;
        for (var i = 0; i < css.length; i++) {
          css[i].disabled = true;
        }
      }
    }

  };
}));
