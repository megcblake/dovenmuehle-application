import { createSelector } from 'reselect';
import { initialState } from './reducer';

const displayItemsSelector = state => state.get('displayItems', initialState);

const itemsSelector = () =>
  createSelector(displayItemsSelector, dispState => dispState.get('items'));

const successSelector = () =>
  createSelector(displayItemsSelector, dispState => dispState.get('success'));

const errorSelector = () =>
  createSelector(displayItemsSelector, dispState => dispState.get('error'));

export { displayItemsSelector, itemsSelector, successSelector, errorSelector };
