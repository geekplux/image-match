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
    console.log(getImageData(img1));

    var similarity = 1;
    return similarity;
  };

  function getImageData(src) {
    var canvas = drawImage(src);
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imageData;
  }

  function drawImage (src) {
    var image = new Image();
    var canvas = document.createElement('canvas');
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext('2d').drawImage(image, 0, 0);
    };

    image.src = src;
    return canvas;
  }

  return imgMatch;
});
