import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

// The first element of the first match which is a Date
// at the first row at first index
// const dateOfFirstMatch = reader.data[0][0];

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
