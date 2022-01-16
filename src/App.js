import react from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Stock from "./Stock";
import Crypto from "./Crypto";
import Home from "./Home";
import ReactDOM from "react-dom";
import classes from "./Layout.module.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className={classes.pagemodule}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/crypto" element={<Crypto />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
