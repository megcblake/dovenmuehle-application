import {
  INPUT_ITEM,
  SAVE_ITEM,
  SAVE_ITEM_SUCCESS,
  SAVE_ITEM_ERROR,
} from './constants';

export function changeItem(item) {
  return {
    type: INPUT_ITEM,
    item,
  };
}

export function saveItem(item) {
  return {
    type: SAVE_ITEM,
    item,
  };
}

export function saveItemSuccess() {
  return {
    type: SAVE_ITEM_SUCCESS,
  };
}

export function saveItemError() {
  return {
    type: SAVE_ITEM_ERROR,
  };
}
