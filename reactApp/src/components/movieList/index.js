import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieList = ({movies}) => {
  const movieCards = movies.map(m => (
    <Movie className="card" key={m.id} movie={m} />
  ));
  return <div className="row movies">{movieCards}</div>;
};

export default MovieList;