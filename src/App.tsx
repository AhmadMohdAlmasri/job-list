import React from 'react';
import { useEffect } from 'react';
import CardList from './components/cardList-component/cardlist.component';
import Header from './components/header-component/header.component';
import './App.css';

// import vacancies from './data.json';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from './utils/firebase/firebase.util';
import { Vacancy } from './components/card-component/card.component';
import { Vacancies } from './components/cardList-component/cardlist.component';
import { useDispatch } from 'react-redux';
import { fetchVacanciesStart, fetchVacanciesSuccess } from './store/vacancies/vacancies.actions';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';
import { selectCurrentVacancies, selectFilteredVacancies } from './store/vacancies/vacancies.selector';
import { selectCurrentTags } from './store/filter/filter.slector';
function App() {
  const dispatch = useDispatch();
  // addCollectionAndDocuments('JobList', vacancies);

  // const res = getCategoriesAndDocuments();
  // const vacancies = [] as Vacancy[];
  // res
  //   .then((result) => vacancies.push(...result))
  //   .then((result) => vacancies)
  //   .catch((error) => console.log(error));

  // console.log(vacancies);

  useEffect(
    (): any => async () => {
      dispatch(fetchVacanciesStart());
    },
    []
  );
  // useEffect(
  //   (): any => async () => {
  //     const vacancies = await getCategoriesAndDocuments();
  //     dispatch(fetchVacanciesSuccess(vacancies));
  //   },
  //   []
  // );

  // const tags: string[] = useSelector(selectCurrentTags);
  // const allVacancies = useSelector(selectCurrentVacancies);
  const filteredVacancies = useSelector(selectFilteredVacancies);
  // console.log(allVacancies);

  // const filteredVacancies = allVacancies.filter(({ role, level, languages, tools }) => {
  //   return tags.length === 0 ? true : tags.every((tag) => [role, level, ...languages, ...tools].includes(tag));
  // });
  // console.log(filterdeVac);
  return (
    <div className="App">
      <Header />
      <CardList vacancies={filteredVacancies} />
    </div>
  );
}

export default App;
