import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { selectCurrentTags } from '../filter/filter.slector';
import { Vacancy } from '../../components/card-component/card.component';
import { VCANCIES_INITIAL_STATE_TP } from './vacancies.reducer';
import { FILTER_INITIAL_STATE_TP } from '../filter/filter.reducer';

import { RootStateTP } from '../store';

const selectVacanciesReducer = (state: RootStateTP): VCANCIES_INITIAL_STATE_TP => state.vacancies;
const selectTagsReducer = (state: RootStateTP): FILTER_INITIAL_STATE_TP => state.filter;

export const selectCurrentVacancies = createSelector(
  [selectVacanciesReducer],
  (vacaciesSlice) => vacaciesSlice.currentVacancies
);

export const selectFilteredVacancies = createSelector(
  [selectVacanciesReducer, selectTagsReducer],
  (vacanciesSlice, tagsSlice) =>
    vacanciesSlice.currentVacancies.filter(({ role, level, languages, tools }) => {
      return tagsSlice.currentTags.length === 0
        ? true
        : tagsSlice.currentTags.every((tag) => [role, level, ...languages, ...tools].includes(tag));
    })
);

// const tags: string[] = useSelector(selectCurrentTags);
// export const selectFilteredVacancies = createSelector([selectVacanciesReducer], (vacanciesSlice): Vacancy[] =>
//   vacanciesSlice.currentVacancies.filter(({ role, level, languages, tools }) => {
//     const tags = ['HTML'];
//     // const tags: string[] = useSelector(selectCurrentTags);
//     return tags.some((tag) => [role, level, ...languages, ...tools].includes(tag));
//   })
// );

// export const selectFilteredVacancies = createSelector([selectVacanciesReducer], (vacanciesSlice): Vacancy[] =>
//   vacanciesSlice.currentVacancies.filter(({ role, level, languages, tools }) => {
//     // debugger;
//     // const tags: string[] = useSelector(selectCurrentTags);
//     const tags = ['sega'];
//     debugger;
//     return tags.some((tag) => [role, level, ...languages, ...tools].includes(tag));
//   })
// );
