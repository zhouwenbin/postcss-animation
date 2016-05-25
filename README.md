# PostCSS animation
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS][PostCSS] PostCSS plugin that adds `@keyframes` from [animate.css](https://github.com/daneden/animate.css).

```css
.foo {
  animation-name: bounce;
}
```

```css
.foo {
  animation-name: bounce;
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}
```

--

## Usage

```js
postcss([ require('postcss-animation') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

### gulp

see this [example](https://github.com/zhouwenbin/postcss-animation-example)

--

### License

MIT © [zhouwenbin](http://zhouwenbin.com)

--

### Thanks

[animate.css](https://github.com/daneden/animate.css)

[npm-image]: https://badge.fury.io/js/postcss-animation.svg
[npm-url]: https://npmjs.org/package/postcss-animation
[travis-image]: https://travis-ci.org/zhouwenbin/postcss-animation.svg?branch=master
[travis-url]: https://travis-ci.org/zhouwenbin/postcss-animation
[daviddm-image]: https://david-dm.org/zhouwenbin/postcss-animation.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhouwenbin/postcss-animation
[PostCSS]: https://github.com/postcss/postcss
