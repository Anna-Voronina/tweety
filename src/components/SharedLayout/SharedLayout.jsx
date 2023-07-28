import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  { path: "/tweets", title: "Tweets" },
];

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {links.map(({ path, title }) => (
              <li key={title}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
