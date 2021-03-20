"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
// enum - enumeration. Object that stores closely related values.
// Values always either numbers or strings
// Purpose of enum is to signal other developers important values
// creates a new type of MatchResult that can be used
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
