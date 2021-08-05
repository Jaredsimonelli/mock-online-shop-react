import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const activeTab =
    location.pathname === "/" ? "new" : location.pathname.substring(1);

  return (
    <>
      <ul id="navbar" className="nav justify-content-end">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${activeTab === "new" ? "active" : ""}`}
            id="new"
          >
            New
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/shirts"
            className={`nav-link ${activeTab === "shirts" ? "active" : ""}`}
            id="shirts"
          >
            Shirts
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/pants"
            className={`nav-link ${activeTab === "pants" ? "active" : ""}`}
            id="pants"
          >
            Pants
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/accessories"
            className={`nav-link ${
              activeTab === "accessories" ? "active" : ""
            }`}
            id="accessories"
          >
            Accessories
          </Link>
        </li>
      </ul>
    </>
  );
};

// Nav.defaultProps = {
//   activeTab: "new",
// };

export default Nav;
