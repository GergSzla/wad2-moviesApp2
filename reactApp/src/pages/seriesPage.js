import React, { useContext } from "react";
import {SeriesContext} from '../contexts/seriesContext'
import PageTemplate from '../components/templateSeriesListPage'


const PopularMovieListPage = () => {
  const context = useContext(SeriesContext);
  const series = context.series

  return (
    <PageTemplate 
      title='Discover Series'
      series={series}
      />
);
};

export default PopularMovieListPage;