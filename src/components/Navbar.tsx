import { Link, useSearchParams } from "react-router-dom";
const Navbar = () => {
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          className={
            "navbar-brand " + todosData === null ? "active" : "navbar-brand"
          }
          to="/"
        >
          All
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={
                "nav-item " + todosData === "active" ? "active" : "nav-item"
              }
            >
              <Link
                className={
                  "nav-link " + todosData === "active" ? "active" : "nav-link"
                }
                aria-current="page"
                to="/?todos=active"
              >
                Active
              </Link>
            </li>
            <li
              className={
                "nav-item " + todosData === "active" ? "active" : "nav-item"
              }
            >
              <Link
                className={
                  todosData === "completed" ? " nav-link active" : "nav-link"
                }
                to="/?todos=completed"
              >
                Completed
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
