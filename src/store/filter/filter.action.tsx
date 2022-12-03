import { createAction } from '../../utils/reducer/reducer.util';
import { FILTER_ACTION_TYPES } from './filter.types';
import { ActionWithPayload } from '../../utils/reducer/reducer.util';

export type UpdateFilterTP = ActionWithPayload<FILTER_ACTION_TYPES.UPDATE_FILTER, string[]>;

export type FilterActionTP = UpdateFilterTP;

// export const updateFilter = (tags: string[], newTag: string): UpdateFilterTP => {
//   if (!tags.includes(newTag)) {
//     const newCurrentTags = [...tags, newTag];
//     return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, newCurrentTags);
//   } else {
//     return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, tags);
//   }
// };

export const addFilter = (tags: string[], newTag: string): FilterActionTP => {
  if (!tags.includes(newTag)) {
    const newCurrentTags = [...tags, newTag];
    return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, newCurrentTags);
  } else {
    return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, tags);
  }
};

export const removeFilter = (tags: string[], newTag: string): FilterActionTP => {
  const newCurrentTags = tags.filter((tag) => tag !== newTag);
  return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, newCurrentTags);
};

export const clearFilters = (tags: string[]): FilterActionTP => {
  const newCurrentTags = tags;
  return createAction(FILTER_ACTION_TYPES.UPDATE_FILTER, newCurrentTags);
};
