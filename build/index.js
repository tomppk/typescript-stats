"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface.
// Read .csv file
// Create an instance of MatchReader and pass in something
// satisfying 'DataReader' interface
// Parse the .csv file and make the data available in
// MatchResult tuple format in the variable as
// matchReader.matches property
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
// Create instance of Summary that takes in two objects
// that satisfy the Analyzer and OutPutTarget interfaces
// WinsAnalysis takes as argument team name
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
// Summary class uses WinsAnalysis class to run analysis
// and ConsoleReport class to report the result of analysis
// in this method. Method takes as argument an array of
// MatchResult tuples
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
