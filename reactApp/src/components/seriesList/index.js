import React from "react";
import Series from "../seriesCard";
import "./seriesList.css";

const SeriesList = ({series}) => {
  const seriesCards = series.map(m => (
    <Series key={m.id} series={m} />
  ));
  return <div className="row tvs">{seriesCards} </div>;
};

export default SeriesList;