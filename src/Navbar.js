import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div className={classes.logo}>Stocka!</div>
      <div class="collapse navbar-collapse d-flex">
        <a class="nav-link" href="/stock">
          Stocks
        </a>
        <a class="nav-link" href="/crypto">
          Cryptos
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
