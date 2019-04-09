import { fromJS } from 'immutable';
import { LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR } from './constants';

export const initialState = fromJS({
  items: [],
  success: false,
  error: false,
});

function displayItemsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS_SUCCESS:
      return state.set('success', true).set('items', action.items);
    case LOAD_ITEMS_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default displayItemsReducer;
