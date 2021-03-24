// Import Node.js File System module
import fs from 'fs';

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
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
