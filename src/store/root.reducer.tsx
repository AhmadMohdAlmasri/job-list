import { combineReducers } from 'redux';

import { filterReducer } from './filter/filter.reducer';
import { vacanciesReducer } from './vacancies/vacancies.reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  vacancies: vacanciesReducer,
});
