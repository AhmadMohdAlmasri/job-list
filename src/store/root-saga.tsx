import { call, all } from 'typed-redux-saga';
import { vacanciesSaga } from './vacancies/vacancies.saga';

export function* rootSaga() {
  yield* all([call(vacanciesSaga)]);
}
