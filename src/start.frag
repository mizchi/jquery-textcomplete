(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === "object" && module.exports) {
    if (window.jQuery) {
      module.exports = factory(jQuery);
    } else {
      var $ = require('jquery');
      module.exports = factory($);
    }
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
