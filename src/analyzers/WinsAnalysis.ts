import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

// Implements Analyzer interface. Optional to add to class
// definition but helps TypeScript to check that class
// satisfies interface
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  // Takes in array of MatchData tuples and returns string
  // calculates number of wins for this.team
  run(matches: MatchData[]): string {
    let wins = 0;

    // Check case where ManU is home team and home team won 'H'
    // and when ManU is away team and away team won 'A'
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
