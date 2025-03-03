import { Link } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import MenuLinks from "./MenuLinks";

function Header() {
  return (
    <header className="bg-base-200 mb-5">
      <nav className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-primary hidden md:flex" to="/">
            <span className="text-xl md:text-2xl"> Products</span>
          </Link>
          <button
            className="btn btn-primary flex md:hidden"
            popovertarget="popover-1"
            style={{ anchorName: "--anchor-1" }}
          >
            Uzum
          </button>
          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <MenuLinks />
          </ul>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal bg-base-200 rounded-box hidden md:flex">
            <MenuLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/card">
            <BsCardList className="text-xl cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
