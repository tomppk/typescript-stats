// Import Node.js File System module
import fs from 'fs';

// readFileSync(filename, config object)
// encoding: 'utf-8' to return file contents as one big string
// chain on .split to split at newline and get an array of strings
// where each string represents one match.
// Map over each match or row in array and for each match split
// that row at comma ,
// [10/08/2018,Man United,Leicester,2,1,H,A Marriner]

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
