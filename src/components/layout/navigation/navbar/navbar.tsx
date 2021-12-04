import { FC } from "react";
import { NavLink } from "react-router-dom";
interface NavItem {
  text: string;
}

export const Navbar: FC<NavItem> = ({ text }) => {
  return (
    <nav className="sidebar">
      <aside>
        <ul className="sidebar__List">
          <li className="sidebar__item">
            <NavLink to="/Table">Home</NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </aside>
    </nav>
  );
};
