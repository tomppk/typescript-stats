import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

// Interface that reader class must satisfy
interface DataReader {
  read(): void;
  data: string[][];
}

// Class follows composition design pattern. Instead of inheriting read() method
// from parent class, an interface is defined that a reader class must satisfy.
// In composition code reuse is achieved by keeping classes separate and loosely
// coupled through interfaces.

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}
  // map over each row and parse values if needed (Date, number,
  // MatchResult) create new array with these parsed values
  // Type assertion row[5] as MatchResult
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // 'H', 'A', 'D'
          row[6],
        ];
      }
    );
  }
}
