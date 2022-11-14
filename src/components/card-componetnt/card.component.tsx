import React from 'react';
import { FC } from 'react';
import Tags from '../tags-component/tags.component';
// ------------------------------
// {
//   "id": 1,
//   "company": "Photosnap",
//   "logo": "./images/photosnap.svg",
//   "new": true,
//   "featured": true,
//   "position": "Senior Frontend Developer",
//   "role": "Frontend",
//   "level": "Senior",
//   "postedAt": "1d ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": ["HTML", "CSS", "JavaScript"],
//   "tools": []
// },

type Vacancy = {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
type VacancyProps = {
  vacancy: Vacancy;
};
const Card: FC<VacancyProps> = ({ vacancy }) => {
  const {
    id,
    company,
    logo,

    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = vacancy;
  const newSt = vacancy.new;

  return (
    <div key={id} className="card">
      <img className="logo" src={logo} alt="company logo" />
      <div className="companyInfo">
        <ul className="companyHeader">
          <li className="listItem companyName">{company}</li>
          {newSt && <li className="listItem new">New!</li>}
          {featured && <li className="listItem featured">Featured</li>}
        </ul>
        <p className="position">{position}</p>
        <ul className="companyFooter">
          <li className="listItem">{postedAt}</li>
          <li className="listItem">{contract}</li>
          <li className="listItem">{location}</li>
        </ul>
      </div>
      <Tags tags={[position, ...languages, ...tools]} />
    </div>
  );
};

export default Card;
