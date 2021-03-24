"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
// Create an instance of MatchReader and pass in something
// satisfying 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
// The first element of the first match which is a Date
// at the first row at first index
// const dateOfFirstMatch = reader.data[0][0];
var manUnitedWins = 0;
// Check case where ManU is home team and home team won 'H'
// and when ManU is away team and away team won 'A'
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
