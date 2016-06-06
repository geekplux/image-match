;(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.imgMatch = factory();
  }

})(this, function () {

  var imgMatch = {};

  imgMatch.compare = function (img1, img2) {

    return similarity;
  };

  return imgMatch;
});
