import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const activeTab =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <>
      <div className="right-nav">
        {/* <div className="nav-item">
          <Link to="/" className="home-tab" id="home">
            Home
          </Link>
        </div> */}
        <Link to="/" className="home-tab" id="home">
          MOCK SHOP
        </Link>
      </div>

      <div className="left-nav">
        <ul id="navbar" className="nav justify-content-end">
          <li className="nav-item">
            <Link
              to="/new"
              className={`nav-link ${activeTab === "new" ? "active" : ""}`}
              id="new"
            >
              New
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/shirts"
              className={`nav-link ${
                activeTab.includes("shirts") ? "active" : ""
              }`}
              id="shirts"
            >
              Shirts
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/pants"
              className={`nav-link ${
                activeTab.includes("pants") ? "active" : ""
              }`}
              id="pants"
            >
              Pants
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/accessories"
              className={`nav-link ${
                activeTab.includes("accessories") ? "active" : ""
              }`}
              id="accessories"
            >
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

// Nav.defaultProps = {
//   activeTab: "new",
// };

export default Nav;
