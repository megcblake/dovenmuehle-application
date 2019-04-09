import { INPUT_ITEM } from './constants';

export function changeItem(item) {
  return {
    type: INPUT_ITEM,
    item,
  };
}
