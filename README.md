# Image-Match

Compare different images pixel by pixel.

## Demo

[http://geekplux.github.io/image-match](http://geekplux.github.io/image-match)

## Installtion

    $ npm install image-match

## Usage

import the `image-match.js` to your HTML.

```javascript

var similarity = imgMatch.compare(templateImg.src, matchImg.src, function (similarity) {
  console.log(similarity);
});

```

## License

MIT &copy; [GeekPlux](https://github.com/geekplux)
