import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./Header";

class TrendingMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   
        let movies = this.props.allData.map((movie, index) => {
          return (
        
          
                <div className="movie" key={index}>
              {/* <input onClick={this.props.getData} type="button" value="Get Trending Movies"></input> */}
              <h3>Title: {movie.title}</h3>
              <h3>Release Date: {movie.release_date}</h3>
              <h3>Popularity: {movie.popularity}</h3>
            </div>
          );
  });

    return (
      <div>
        <Header />
        <div className="App">{movies}</div>
      </div>
    ); 
  }
  }
export default TrendingMovies;
