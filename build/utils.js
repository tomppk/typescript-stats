"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // 28/10/2018 day/month/year
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // Date constructor takes in (year, month, day). Month is zero
    // indexed so Jan = 0, Feb = 1 etc.
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
