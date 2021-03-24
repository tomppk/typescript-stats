import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

// Define interfaces that classes to analyze and report
// data must satisfy
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // Static methods can be called on the class itself
  // without needing to create an instance of the class
  // e.g. Summary.winsAnalysisWithHtmlReport()
  // Returns an instance of Summary with predefined
  // analysis and report object loaded into it
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  // Calls run() method of the Analyzer given as
  // constructor argument that returns a string.
  // Calls print() method of OutPutTarget with the
  // returned analysis string
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
