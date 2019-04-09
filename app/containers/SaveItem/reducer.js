import { fromJS } from 'immutable';
import { INPUT_ITEM, SAVE_ITEM_SUCCESS, SAVE_ITEM_ERROR } from './constants';

export const initialState = fromJS({
  item: '',
  success: false,
  error: false,
});

function saveItemReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_ITEM:
      return state.set('item', action.item);
    case SAVE_ITEM_SUCCESS:
      return state.set('item', '').set('success', true);
    case SAVE_ITEM_ERROR:
      return state.set('item', '').set('error', true);
    default:
      return state;
  }
}

export default saveItemReducer;
