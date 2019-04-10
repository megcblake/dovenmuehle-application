import { fromJS } from 'immutable';

import {
  saveItemSelector,
  itemSelector,
  successSelector,
  errorSelector,
} from '../selectors';

describe('saveItemSelector', () => {
  it('should select the save state', () => {
    const saveState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      save: saveState,
    });
    expect(saveItemSelector(mockedState)).toEqual(saveState);
  });
});

describe('itemSelector', () => {
  const selectItem = itemSelector();
  it('should select the item state', () => {
    const item = 'Finish yet another test';
    const mockedState = fromJS({
      save: {
        item,
      },
    });
    expect(selectItem(mockedState)).toEqual(item);
  });
});

describe('successSelector', () => {
  const selectSuccess = successSelector();
  it('should select the success state', () => {
    const success = false;
    const mockedState = fromJS({
      save: {
        success,
      },
    });
    expect(selectSuccess(mockedState)).toEqual(success);
  });
});

describe('errorSelector', () => {
  const selectError = errorSelector();
  it('should select the error state', () => {
    const error = false;
    const mockedState = fromJS({
      save: {
        error,
      },
    });
    expect(selectError(mockedState)).toEqual(error);
  });
});
