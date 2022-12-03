import React from 'react';
import { FC } from 'react';
import './card.styles.scss';
import Tags from '../tags-component/tags.component';
import CompanyLogo from '../companyLogo-component/companyLogo.component';
import CompanyInfo from '../companyInfo-component/CompnyInfo.component';
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

export type Vacancy = {
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
  const { id, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools } =
    vacancy;
  const newSt = vacancy.new;

  return (
    <div key={id} className="card">
      <CompanyLogo logo={logo} />
      <CompanyInfo companyInfoP={{ company, position, postedAt, contract, location, featured, newSt }} />

      <Tags tags={[role, level, ...languages, ...tools]} />
    </div>
  );
};

export default Card;
