import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSaveString = state => state.get('save', initialState);

const makeSelectString = () =>
  createSelector(selectSaveString, saveState => saveState.get('username'));

export { selectSaveString, makeSelectString };
