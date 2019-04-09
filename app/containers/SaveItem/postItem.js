import { put, select } from 'redux-saga/effects';
import { saveItemSuccess, saveItemError } from './actions';
import { itemSelector } from './selectors';

export function* postItem() {
  const item = yield select(itemSelector());
  try {
    yield fetch('/api/saveItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item }),
    });
    yield put(saveItemSuccess());
  } catch (error) {
    yield put(saveItemError());
  }
}
