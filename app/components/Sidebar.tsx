import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="p-4 sidebar-link" to="/">
        <i className="fa-solid fa-house mr-3" aria-hidden="true"></i>
        <span>Home</span>
      </Link>
      <Link className="p-4 sidebar-link" to="/subjects">
        <i className="fa-solid fa-book-open mr-3" aria-hidden="true"></i>
        <span>Subjects</span>
      </Link>
      <Link className="p-4 sidebar-link" to="/notes">
        <i className="fa-solid fa-sticky-note mr-3" aria-hidden="true"></i>
        <span>Notes</span>
      </Link>
      <Link className="p-4 sidebar-link" to="/timer">
        <i className="fa-solid fa-stopwatch mr-3" aria-hidden="true"></i>
        <span>Study Timer</span>
      </Link>
    </div>
  );
};

export default Sidebar;
