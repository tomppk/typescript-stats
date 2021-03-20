// Import Node.js File System module
import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Create a new type MatchData that is a tuple. Defines the
// structure and order of MatchData array
type MatchData = [Date, string, string, number, number, MatchResult, string];

// readFileSync(filename, config object)
// encoding: 'utf-8' to return file contents as one big string
// chain on .split to split at newline and get an array of strings
// where each string represents one match.
// Map over each match or row in array and for each match split
// that row at comma ,
// [10/08/2018,Man United,Leicester,2,1,H,A Marriner]

// Properties:
// data: array of arrays of strings. Save read file contents here
// filename: string
export class CSVFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // map over each row and parse values if needed (Date, number,
      // MatchResult) create new array with these parsed values
      // Type assertion row[5] as MatchResult
      .map(
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
