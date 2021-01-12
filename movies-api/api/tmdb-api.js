import fetch from 'node-fetch';

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    ).then(res => res.json())
    .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getActors = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getActor = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    ).then(res => res.json());
  };

  export const getSeries = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
       )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getReqSeries = id => {
    return fetch(
      ` https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
       )
      .then(res => res.json())
  };

  export const getReqSeriesReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };