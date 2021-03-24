"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
// Class follows composition design pattern. Instead of inheriting read() method
// from parent class, an interface is defined that a reader class must satisfy.
// In composition code reuse is achieved by keeping classes separate and loosely
// coupled through interfaces.
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // map over each row and parse values if needed (Date, number,
    // MatchResult) create new array with these parsed values
    // Type assertion row[5] as MatchResult
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
