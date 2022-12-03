import { selectCurrentTags } from '../../store/filter/filter.slector';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilter } from '../../store/filter/filter.action';
import { TagProp } from '../tag-component/tag.component';
import { FC } from 'react';

const FilterTag: FC<TagProp> = ({ tag }) => {
  const dispatch = useDispatch();
  const currentTags = useSelector(selectCurrentTags);

  const removeFilterHandler = (event: any) => {
    console.log(event.target.dataset.value);
    dispatch(removeFilter(currentTags, event.target.dataset.value));
  };

  return (
    <div className="filterTag">
      <span className="tagName">{tag}</span>
      <img
        src="./images/icon-remove.svg"
        onClick={removeFilterHandler}
        data-value={tag}
        className="deleteFilter"
        alt="filter delete button"
      ></img>
    </div>
  );
};
export default FilterTag;
