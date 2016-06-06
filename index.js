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
    var imgData = getImgData(img1);
    console.log(imgData);

    var similarity = 1;
    return similarity;
  };


  /**
   *
   * @param {String} src image url
   * @returns {Object}
   */
  function getImageData(src) {
    var canvas = drawImage(src);
    var ctx = canvas.getContext('2d');
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imgData;
  }


  /**
   *
   * @param {String} src image url
   * @returns {Object} canvas object
   */
  function drawImage (src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
    };

    img.src = src;
    return canvas;
  }


  /**
   * refactor the image data to a RGB array.
   * @param {Object} imgData canvas getImageData's result
   * @returns {Array} a RGB array
   */
  function refactorRGB (imgData) {
    var data = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var rgbArr = [];
    for (h = 0; h < height; h += 12) {
      for (w = 0; w < width; w += 6) {
        var index = (w + width * h) * 4;
        var r = imgDataArr[index + 0];
        var g = imgDataArr[index + 1];
        var b = imgDataArr[index + 2];
        rgbArr.push({r: r, g: g, b: b});
      }
    }
    return rgbArr;
  }


  function calculateGray(r, g, b) {
    return 0.299 * r + 0.578 * g + 0.114 * b;
  }

  return imgMatch;
});
