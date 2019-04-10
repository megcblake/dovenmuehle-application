import { put } from 'redux-saga/effects';
import { saveItemError } from '../actions';
import { postItem } from '../postItem';

describe('displayItemsSaga', () => {
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
