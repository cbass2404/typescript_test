"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"]
    .get(url)
    .then(function (res) {
    console.log(res.data);
})["catch"](function (err) {
    console.error(err);
});
