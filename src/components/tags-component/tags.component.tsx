import { FC } from 'react';
import Tag from '../tag-component/tag.component';

type TagsProps = {
  tags: string[];
};

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((tagText, index) => (
        <Tag key={index} tag={tagText} />
      ))}
    </ul>
  );
};

export default Tags;
