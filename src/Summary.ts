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
}
