import './filter.styles.scss';
import FilterList from '../filterList-component/filterList.component';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../store/filter/filter.action';
const Filter = () => {
  const dispatch = useDispatch();
  const clearFiltershandler = () => {
    dispatch(clearFilters([]));
  };
  return (
    <div className="filterCard">
      <FilterList />
      <div className="clearFilters" onClick={clearFiltershandler}>
        <span>clear</span>
      </div>
    </div>
  );
};

export default Filter;
