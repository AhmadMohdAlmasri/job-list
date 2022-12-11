import Filter from '../filter-component/filter.component';
import './header.styles.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="headerImage"></div>
      <Filter />
    </div>
  );
};
export default Header;
