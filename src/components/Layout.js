import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
  <div>
    <ul>
      <li>
        <NavLink to="/">Домашняя</NavLink>
      </li>
      <li>
        <NavLink to="/dogs">Коллекция</NavLink>
      </li>
      </ul>
      <main>
        <Outlet />
      </main>
  </div>
  );
};