import { put } from 'redux-saga/effects';
import { loadItemsSuccess, loadItemsError } from './actions';

export function* fetchItems() {
  try {
    const response = yield fetch('/api/fetchItems');
    const items = yield response.json();
    yield put(loadItemsSuccess(items));
  } catch (error) {
    yield put(loadItemsError());
  }
}
