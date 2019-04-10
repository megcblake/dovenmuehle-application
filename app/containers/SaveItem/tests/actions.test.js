import {
  INPUT_ITEM,
  SAVE_ITEM,
  SAVE_ITEM_SUCCESS,
  SAVE_ITEM_ERROR,
} from '../constants';
import {
  changeItem,
  saveItem,
  saveItemSuccess,
  saveItemError,
} from '../actions';

describe('actions', () => {
  describe('changeItem', () => {
    it('should return the correct type and passed in item', () => {
      const item = 'Finish tests';
      const expectedAction = {
        type: INPUT_ITEM,
        item,
      };
      expect(changeItem(item)).toEqual(expectedAction);
    });
  });

  describe('saveItem', () => {
    it('should return the correct type and passed in item', () => {
      const item = 'Finish more tests';
      const expectedAction = {
        type: SAVE_ITEM,
        item,
      };
      expect(saveItem(item)).toEqual(expectedAction);
    });
  });

  describe('saveItemSuccess', () => {
    it('should return the correct type', () => {
      const expectedAction = {
        type: SAVE_ITEM_SUCCESS,
      };
      expect(saveItemSuccess()).toEqual(expectedAction);
    });
  });

  describe('saveItemError', () => {
    it('should return the correct type', () => {
      const expectedAction = {
        type: SAVE_ITEM_ERROR,
      };
      expect(saveItemError()).toEqual(expectedAction);
    });
  });
});
