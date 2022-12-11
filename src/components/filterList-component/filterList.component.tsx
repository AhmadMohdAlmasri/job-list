import FilterTag from '../filterTag-component/filterTag.component';
import { selectCurrentTags } from '../../store/filter/filter.slector';
import { useSelector } from 'react-redux';
import './filterList.styles.scss';
const FilterList = () => {
  const currentTags = useSelector(selectCurrentTags);

  return (
    <div className="filterTagsList">
      {currentTags.map((tag) => (
        <FilterTag key={tag} tag={tag} />
      ))}
    </div>
  );
};
export default FilterList;
