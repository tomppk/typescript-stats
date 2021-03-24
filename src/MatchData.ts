import { MatchResult } from './MatchResult';

// Create a new type MatchData that is a tuple. Defines the
// structure and order of MatchData array
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
