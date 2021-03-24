import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface.
// Read .csv file
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something
// satisfying 'DataReader' interface
// Parse the .csv file and make the data available in
// MatchResult tuple format in the variable as
// matchReader.matches property
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Create instance of Summary that takes in two objects
// that satisfy the Analyzer and OutPutTarget interfaces
// WinsAnalysis takes as argument team name
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

// Summary class uses WinsAnalysis class to run analysis
// and ConsoleReport class to report the result of analysis
// in this method. Method takes as argument an array of
// MatchResult tuples
summary.buildAndPrintReport(matchReader.matches);
