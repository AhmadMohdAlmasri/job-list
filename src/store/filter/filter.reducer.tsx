import { type } from '@testing-library/user-event/dist/type';
import { FILTER_ACTION_TYPES } from './filter.types';
import { FilterActionTP } from './filter.action';

export type FILTER_INITIAL_STATE_TP = {
  currentTags: string[];
};

const FILTER_INITIAL_STATE: FILTER_INITIAL_STATE_TP = {
  currentTags: [],
};

export const filterReducer = (state = FILTER_INITIAL_STATE, action = {} as FilterActionTP) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPES.UPDATE_FILTER:
      return { ...state, currentTags: payload };

    default:
      return state;
  }
};
