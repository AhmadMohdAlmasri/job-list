import { FC } from 'react';

type LogoProps = {
  logo: string;
};

const CompanyLogo: FC<LogoProps> = ({ logo }) => {
  return <img className="logo" src={logo} alt="company logo" />;
};

export default CompanyLogo;
