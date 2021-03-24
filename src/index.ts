import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something
// satisfying 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// The first element of the first match which is a Date
// at the first row at first index
// const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins = 0;

// Check case where ManU is home team and home team won 'H'
// and when ManU is away team and away team won 'A'
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
