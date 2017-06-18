var config = require('../config');

// 生成版本控制号
exports.getVersion = function () {
    var date = new Date();
    var year  = date.getFullYear().toString(),
        month = date.getMonth() + 1,
        day   = date.getDate();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    return year + month + day;
};