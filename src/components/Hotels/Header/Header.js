import logout from '../../../images/logout.svg';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
      <div className="header">
        <h1 className="header__header">Simple Hotel Check</h1>
        <NavLink to="/" className="header__link"><img src={logout} alt="logout" className="header__logout" /></NavLink>
      </div>
  );
}

export default Header;
