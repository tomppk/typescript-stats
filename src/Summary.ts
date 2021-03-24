import { MatchData } from './MatchData';

// Define interfaces that classes to analyze and report
// data must satisfy
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
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
