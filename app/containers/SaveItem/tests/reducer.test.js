import { fromJS } from 'immutable';

import saveItemReducer from '../reducer';
import { changeItem, saveItemSuccess, saveItemError } from '../actions';

describe('saveItemReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      item: '',
      success: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(saveItemReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle changeItem', () => {
    const item = 'Finish another test';
    const expectedResult = state.set('item', item);

    expect(saveItemReducer(state, changeItem(item))).toEqual(expectedResult);
  });

  it('should handle saveItemSuccess', () => {
    const expectedResult = state.set('item', '').set('success', true);

    expect(saveItemReducer(state, saveItemSuccess())).toEqual(expectedResult);
  });

  it('should handle saveItemError', () => {
    const expectedResult = state.set('item', '').set('error', true);

    expect(saveItemReducer(state, saveItemError())).toEqual(expectedResult);
  });
});
