"use strict";

/**
 * want to use the method inside the date.js, use the exports.method = function(){}
 * don't need any instantiation like java does
 * {@link https://www.sitepoint.com/understanding-module-exports-exports-node-js/}
 */
exports.getDate = function () {
  var today = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }; //day is the variable here

  return today.toLocaleDateString('en-us', options);
};

exports.getDay = function () {
  var today = new Date();
  var options = {
    weekday: 'long'
  }; //day is the variable here

  return today.toLocaleDateString('en-us', options);
};