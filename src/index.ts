import { CSVFileReader } from './CSVFileReader';

const reader = new CSVFileReader('football.csv');
reader.read();

// enum - enumeration. Object that stores closely related values.
// Values always either numbers or strings
// Purpose of enum is to signal other developers important values
// creates a new type of MatchResult that can be used
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

// Check case where ManU is home team and home team won 'H'
// and when ManU is away team and away team won 'A'
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
