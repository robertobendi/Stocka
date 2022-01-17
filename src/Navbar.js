import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={classes.navigation}>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="collapse navbar-collapse d-flex">
          <ul>
            <li>
              <div className={classes.logo}>Stocka!</div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stock">Stock</Link>
            </li>
            <li>
              <Link to="/crypto">Crypto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
