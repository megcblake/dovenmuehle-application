import { createSelector } from 'reselect';
import { initialState } from './reducer';

const saveItemSelector = state => state.get('save', initialState);

const itemSelector = () =>
  createSelector(saveItemSelector, saveState => saveState.get('item'));

const successSelector = () =>
  createSelector(saveItemSelector, saveState => saveState.get('success'));

const errorSelector = () =>
  createSelector(saveItemSelector, saveState => saveState.get('error'));

export { saveItemSelector, itemSelector, successSelector, errorSelector };
