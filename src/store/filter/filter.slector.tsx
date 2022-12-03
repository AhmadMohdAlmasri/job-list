import { createSelector } from 'reselect';

import { RootStateTP } from '../store';

const selectFilterReducer = (state: RootStateTP) => state.filter;

export const selectCurrentTags = createSelector([selectFilterReducer], (filterSlice) => filterSlice.currentTags);
