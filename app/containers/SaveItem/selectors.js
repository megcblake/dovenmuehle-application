import { createSelector } from 'reselect';
import { initialState } from './reducer';

const saveItemSelector = state => state.get('saveItem', initialState);

const itemSelector = () =>
  createSelector(saveItemSelector, saveItemState => saveItemState.get('item'));

export { saveItemSelector, itemSelector };
