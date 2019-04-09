import { fromJS } from 'immutable';
import { INPUT_ITEM } from './constants';

export const initialState = fromJS({
  item: '',
});

function saveItemReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_ITEM:
      return state.set('item', action.item);
    default:
      return state;
  }
}

export default saveItemReducer;
