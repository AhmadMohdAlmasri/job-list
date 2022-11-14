import { FC } from 'react';
type TagsProps = {
  tags: string[];
};

const Tags: FC<TagsProps> = ({ tags }) => {
  console.log(tags);
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
