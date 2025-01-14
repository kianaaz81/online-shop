import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <li className="nav-item" id="nav-item">
      <NavLink className="nav-link" to={to}>
        {children}
      </NavLink>
    </li>
  );
};
export default NavItem;
