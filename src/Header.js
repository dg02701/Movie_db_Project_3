import React, { Component } from "react"
import "./Header.css"
import { Route, Link, Switch } from "react-router-dom";


class Header extends Component{
    render() {
        return (
          <div className="header">
            <h1 id="title">Movie DB </h1>
            <nav>
              <Link to="/">Back to Movie DB Home Page</Link>
            </nav>
          </div>
        );
    }
}





export default Header;
