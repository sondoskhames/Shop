import { NavLink, Outlet, useNavigation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <header className="navbar">
        <span className="brand">Shop</span>
        <nav>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="container">
        {navigation.state === "loading" && <p className="muted">Loading…</p>}
        <Outlet />
      </main>
    </>
  );
}