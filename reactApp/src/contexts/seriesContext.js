import React, {useState, useEffect, createContext, useReducer } from "react";
import { getSeries } from "../api/movie-api";

export const SeriesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return {
        series: action.payload.series
      };
    default:
      return state;
  }
};

const SeriesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { series: [] });
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    getSeries().then((series) => {
      dispatch({ type: "load", payload: { series } });
    });
  }, []);

  return (
    <SeriesContext.Provider
      value={{
        series: state.series,
        setAuthenticated
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;