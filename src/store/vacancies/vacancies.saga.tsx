import { fetchVacanciesSuccess, fetchVacanciesFailed } from './vacancies.actions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import { takeLatest, all, call, put } from 'typed-redux-saga';
import { VACANCIES_ACTION_TYPES } from './vacancies.types';

// --------------------------------------------------------

export function* fetchVacanciesAsync() {
  try {
    const vacancies = yield* call(getCategoriesAndDocuments, 'JobList');
    yield* put(fetchVacanciesSuccess(vacancies));
  } catch (error) {
    yield* put(fetchVacanciesFailed(error as Error));
  }
}

export function* onFetchVacancies() {
  // console.log('onfetchvacancy triger');
  yield* takeLatest(VACANCIES_ACTION_TYPES.FETCH_VACANCIES_START, fetchVacanciesAsync);
}
// ----------------------------------------------------

export function* vacanciesSaga() {
  yield* all([call(onFetchVacancies)]);
}
