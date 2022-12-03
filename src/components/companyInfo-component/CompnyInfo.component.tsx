import { FC } from 'react';
type CompanyInfoP = {
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  featured: Boolean;
  newSt: Boolean;
};
type CompanyProps = {
  companyInfoP: CompanyInfoP;
};
const CompanyInfo: FC<CompanyProps> = ({ companyInfoP }) => {
  const { company, position, postedAt, contract, location, featured, newSt } = companyInfoP;

  return (
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
  );
};

export default CompanyInfo;
