import React, { useState } from "react";
import SeriesList from "../seriesList/index";
import Headerr from "../headerSeriesList";

const MovieListPageTemplate = ({ series, title }) => {
  return (
    <>
      <Headerr title={title} numTvs={series.length} />
      {/* <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/> */}
      <SeriesList
       series={series}
      ></SeriesList>
    </>
  );
};

export default MovieListPageTemplate ;