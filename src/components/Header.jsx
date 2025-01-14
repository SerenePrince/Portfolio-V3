import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/Portfolio-V3/", label: "Home" },
    { path: "/Portfolio-V3/about", label: "About" },
    { path: "/Portfolio-V3/projects", label: "Projects" },
    { path: "/Portfolio-V3/contact", label: "Contact" },
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
