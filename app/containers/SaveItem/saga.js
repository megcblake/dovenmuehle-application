import { takeLatest } from 'redux-saga/effects';
import { SAVE_ITEM } from './constants';
import { postItem } from './postItem';

export default function* displayItemsSaga() {
  yield takeLatest(SAVE_ITEM, postItem);
}
