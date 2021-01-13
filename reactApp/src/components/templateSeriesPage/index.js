import React from "react";
import SeriesHeader from '../headerSeries'
import "./seriesPage.css";


const TemplateSeriesPage = ({ series, children }) => {
  return (
    <>
      <div className="page">
        <SeriesHeader series={series} />
        <div className="row">
          <div className="col-3">
            <img
              src={
                series.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${series.poster_path}`
                  : "./film-poster-placeholder.png"
              }
              className="tv"
              alt={series.name}
            />
          </div>
          <div className=" mTitle col-8">
            
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateTvPage