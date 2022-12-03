import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../store/filter/filter.action';

import { selectCurrentTags } from '../../store/filter/filter.slector';
// type TagType = string;

export type TagProp = {
  tag: string;
};

const Tag: FC<TagProp> = ({ tag }) => {
  const dispatch = useDispatch();
  const currentTags = useSelector(selectCurrentTags);

  const tagSelectHandler = (event: any): void => {
    // const newCurrentTags = [...currentTags, event.target.innerHTML];
    // currentTags.push(event.target.innerHTML);

    dispatch(addFilter(currentTags, event.target.innerHTML));
  };

  return (
    <li onClick={tagSelectHandler} value={tag}>
      {tag}
    </li>
  );
};

export default Tag;
