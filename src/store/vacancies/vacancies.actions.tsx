import { createAction } from '../../utils/reducer/reducer.util';
import { VACANCIES_ACTION_TYPES } from './vacancies.types';
import { Action, ActionWithPayload } from '../../utils/reducer/reducer.util';
import { Vacancy } from '../../components/card-component/card.component';

// export type SetFilteredVacanciesTP = ActionWithPayload<VACANCIES_ACTION_TYPES.SET_FILTERED_VACANCIES, Vacancy[]>;

export type FetchVacanciesSuccessTP = ActionWithPayload<VACANCIES_ACTION_TYPES.FETCH_VACANCIES_SUCCESS, Vacancy[]>;

export type FetchVacanciesFailedTP = ActionWithPayload<VACANCIES_ACTION_TYPES.FETCH_VACANCIES_FAILED, Error>;

export type FetchVacanciesStartTP = Action<VACANCIES_ACTION_TYPES.FETCH_VACANCIES_START>;

export type VacanciesActionTP =
  // | SetFilteredVacanciesTP
  FetchVacanciesSuccessTP | FetchVacanciesFailedTP | FetchVacanciesStartTP;

// export const setFilteredVacancies = (vacancies: Vacancy[]): SetFilteredVacanciesTP =>
//   createAction(VACANCIES_ACTION_TYPES.SET_FILTERED_VACANCIES, vacancies);

export const fetchVacanciesStart = (): FetchVacanciesStartTP =>
  createAction(VACANCIES_ACTION_TYPES.FETCH_VACANCIES_START);

export const fetchVacanciesSuccess = (vacancies: Vacancy[]): FetchVacanciesSuccessTP =>
  createAction(VACANCIES_ACTION_TYPES.FETCH_VACANCIES_SUCCESS, vacancies);

export const fetchVacanciesFailed = (error: Error): FetchVacanciesFailedTP =>
  createAction(VACANCIES_ACTION_TYPES.FETCH_VACANCIES_FAILED, error);
