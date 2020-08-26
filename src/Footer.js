import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h5>copyright 2020 MJD LLC</h5>
        <h5>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb
        </h5>
      </footer>
    );
  }
}

export default Footer;
