"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
// Implements Analyzer interface. Optional to add to class
// definition but helps TypeScript to check that class
// satisfies interface
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    // Takes in array of MatchData tuples and returns string
    // calculates number of wins for this.team
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        // Check case where ManU is home team and home team won 'H'
        // and when ManU is away team and away team won 'A'
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
