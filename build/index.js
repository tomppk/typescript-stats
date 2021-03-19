"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Node.js File System module
var fs_1 = __importDefault(require("fs"));
// readFileSync(filename, config object)
// encoding: 'utf-8' to return file contents as one big string
// chain on .split to split at newline and get an array of strings
// where each string represents one match.
// Map over each match or row in array and for each match split
// that row at comma ,
// [10/08/2018,Man United,Leicester,2,1,H,A Marriner]
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
