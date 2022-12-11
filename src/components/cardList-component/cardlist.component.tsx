import { FC } from 'react';
import { Vacancy } from '../card-component/card.component';
import Card from '../card-component/card.component';
import './cardList.styles.scss';

export type Vacancies = {
  vacancies: Vacancy[];
};
const CardList: FC<Vacancies> = ({ vacancies }) => {
  // console.log(vacancies);
  return (
    <div className="wraper">
      {vacancies.map((vacancy) => (
        <Card key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};

export default CardList;
