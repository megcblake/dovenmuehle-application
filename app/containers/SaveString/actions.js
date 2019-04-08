import { INPUT_STRING } from './constants';

export function changeString(string) {
  return {
    type: INPUT_STRING,
    string,
  };
}
