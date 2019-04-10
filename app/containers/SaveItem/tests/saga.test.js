import { put, takeLatest } from 'redux-saga/effects';
import { saveItemError } from '../actions';
import { postItem } from '../postItem';
import { SAVE_ITEM } from '../constants';
import displayItemsSaga from '../saga';

describe('displayItemsSaga', () => {
  it('should call on SAVE_ITEM', () => {
    const iterator = displayItemsSaga();
    const expected = takeLatest(SAVE_ITEM, postItem);
    const actual = iterator.next().value;

    expect(actual).toEqual(expected);
  });
});

describe('postItem', () => {
  let saveItemGenerator;

  beforeEach(() => {
    saveItemGenerator = postItem();

    const selectDescriptor = saveItemGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should call the saveItemError action if the response errors', () => {
    const putDescriptor = saveItemGenerator.next().value;
    expect(putDescriptor).toEqual(put(saveItemError()));
  });
});
