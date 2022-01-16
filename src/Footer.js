import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div class="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
        <div class="col-12">
          <div class="row row-2">
            <div class="col-sm-6 text-md-left">
              <h5>
                <span>
                  {" "}
                  <i class="fa fa-firefox text-light" aria-hidden="true"></i>
                </span>
                <b className={classes.logoFooter}> Stocka!</b>
              </h5>
            </div>
            <div class="col-sm-3 my-sm-0 mt-5">
              <ul class="list-unstyled">
                <li>
                  <a class="mt-0" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/stock">Stocks</a>
                </li>
                <li>
                  <a href="/crypto">Crypto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
        <div class="col-12">
          <div class="row my-4 row-1 no-gutters">
            <div class="col-sm-3 col-auto text-center">
              <small>&#9400; strobetano apps / Roberto Bendinelli</small>
            </div>
            <div class="col-md-3 col-auto "></div>
            <div class="col-md-3 col-auto"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
