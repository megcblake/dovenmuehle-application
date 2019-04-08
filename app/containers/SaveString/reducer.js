import { fromJS } from 'immutable';
import { INPUT_STRING } from './constants';

export const initialState = fromJS({
  string: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_STRING:
      return state.set('string', action.string);
    default:
      return state;
  }
}

export default homeReducer;
