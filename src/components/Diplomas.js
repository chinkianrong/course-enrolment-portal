import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className="diplomas">
        {diplomas.map(dip => (
          <li key={dip.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "diploma-active" : null
              }
              to={dip.id}
            >
              {dip.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
