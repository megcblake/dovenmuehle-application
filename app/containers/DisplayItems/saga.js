import { takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS } from './constants';
import { fetchItems } from './fetchItems';

export default function* displayItemsSaga() {
  yield takeLatest(LOAD_ITEMS, fetchItems);
}
