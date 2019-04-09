import { LOAD_ITEMS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR } from './constants';

export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

export function loadItemsSuccess(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function loadItemsError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}
