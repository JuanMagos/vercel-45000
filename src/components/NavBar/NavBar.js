import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div>LOGO</div>
      <div>
        <ul className="lista">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/"
            >
              Todos los productos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/category/monitores"
            >
              Monitoressssss
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/category/teclados"
            >
              Teclados
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/category/mouse"
            >
              Mouse
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/category/headsets"
            >
              Headset
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
