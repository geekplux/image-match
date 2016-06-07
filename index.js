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

  /**
   * matching the pair of image
   * @param {String} templateImg the template image
   * @param {String} matchImg image await matching
   * @returns {}
   */
  imgMatch.compare = function (templateImg, matchImg, callback) {
    var templateImgData, matchImgData;
    getImgData(templateImg, function (data) {
      templateImgData = getGrayArr(data);
    });
    getImgData(matchImg, function (data) {
      matchImgData = getGrayArr(data);
    });

    var similarity = 0;
    setTimeout(function () {
      for (var t = 0, tLen = templateImgData.length; t < tLen; ++t) {
        for (var m = 0, mLen = matchImgData.length; m < mLen; ++m) {
          similarity += (templateImgData[t] - matchImgData[m]);
        }
      }
      callback(similarity);
      return similarity;
    }, 0);

    return similarity;
  };


  /**
   *
   * @param {String} src image url
   * @returns {Object}
   */
  function getImgData(src, callback) {
    var img = drawImg(src, function (canvas) {
      var ctx = canvas.getContext('2d');
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      callback(imgData);
      return imgData;
    });
    return img;
  }


  /**
   * transform the image to a canvas object.
   * @param {String} src image url
   * @returns {Object}
   */
  function drawImg (src, callback) {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);

      callback(canvas);
      return canvas;
    };

    img.src = src;
    return img;
  }


  /**
   * return a gray array according to RGB value in image data.
   * @param {Object} imgData canvas getImageData's result
   * @returns {Array} grayArr the Gray value array
   */
  function getGrayArr (imgData) {
    var data = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var grayArr = [];
    for (h = 0; h < height; h += 12) {
      for (w = 0; w < width; w += 6) {
        var index = (w + width * h) * 4;
        var r = data[index + 0];
        var g = data[index + 1];
        var b = data[index + 2];
        grayArr.push(calculateGray(r, g, b));
      }
    }
    return grayArr;
  }


  function calculateGray(r, g, b) {
    return 0.299 * r + 0.578 * g + 0.114 * b;
  }

  return imgMatch;
});
