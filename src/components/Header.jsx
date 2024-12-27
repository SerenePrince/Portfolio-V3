import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/noahpn/", label: "Home" },
    { path: "/noahpn/about", label: "About" },
    { path: "/noahpn/projects", label: "Projects" },
    { path: "/noahpn/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-center p-3 fade-in bg-black bg-opacity-50">
      <nav>
        <ul className="flex space-x-5">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`underline ${
                  location.pathname === path ? "active" : ""
                } hover:text-purple-300 transition`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
