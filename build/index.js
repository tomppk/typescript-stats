"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface.
// Read .csv file
var csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
// Create an instance of MatchReader and pass in something
// satisfying 'DataReader' interface
// Parse the .csv file and make the data available in
// MatchResult tuple format in the variable as
// matchReader.matches property
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// Create instance of Summary that takes in two objects
// that satisfy the Analyzer and OutPutTarget interfaces
// WinsAnalysis takes as argument team name
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
// Summary class uses WinsAnalysis class to run analysis
// and ConsoleReport class to report the result of analysis
// in this method. Method takes as argument an array of
// MatchResult tuples
summary.buildAndPrintReport(matchReader.matches);
