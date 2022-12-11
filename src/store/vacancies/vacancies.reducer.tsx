import { VACANCIES_ACTION_TYPES } from './vacancies.types';
import { VacanciesActionTP } from './vacancies.actions';
import { Vacancy } from '../../components/card-component/card.component';

export type VCANCIES_INITIAL_STATE_TP = {
  currentVacancies: Vacancy[];
  // filteredVacancies: Vacancy[];
  error: Error | null;
};

const VCANCIES_INITIAL_STATE: VCANCIES_INITIAL_STATE_TP = {
  currentVacancies: [],
  // filteredVacancies: [],
  error: null,
};

export const vacanciesReducer = (state = VCANCIES_INITIAL_STATE, action = {} as VacanciesActionTP) => {
  switch (action.type) {
    case VACANCIES_ACTION_TYPES.FETCH_VACANCIES_SUCCESS:
      return { ...state, currentVacancies: action.payload };

    case VACANCIES_ACTION_TYPES.FETCH_VACANCIES_FAILED:
      return { ...state, error: action.payload };

    case VACANCIES_ACTION_TYPES.FETCH_VACANCIES_START:
      return { ...state };

    default:
      return state;
  }
};
