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
// Generics T type of data that the class takes in. Generic class
// is customized to work with the assigned type of data.
// When using a generic class we have to pass in the type to
// customize the class to work with this type.
export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  // Abstract method for child class to implement
  abstract mapRow(row: string[]): T;

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
      // We are passing a reference of mapRow to map, not calling it
      // Map will call it for every row as it iterates
      .map(this.mapRow);
  }
}
