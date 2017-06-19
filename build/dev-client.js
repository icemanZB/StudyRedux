/* eslint-disable */
// require('eventsource-polyfill');  // 为了兼容 IE
// https://www.npmjs.com/package/event-source-polyfill

var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');
// 订阅
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
});
