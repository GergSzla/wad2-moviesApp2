import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({ movie }) => {

  return (
    <div className="col-lg-5">
      <div className="card">
        <div className="row">
          <div className="col-lg-6">
            <Link to={`/movies/${movie.id}`}>
              <img
                className="card-img-tag center "
                id="cardImg"
                alt={movie.title}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "./film-poster-placeholder.png"
                }
              />
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <h4 className="card-title ">{movie.title}</h4>
              <p>
                <FontAwesomeIcon icon={["fas", "calendar"]} />
                <span> {movie.release_date}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} />
                <span> {movie.vote_average} ({movie.vote_count} votes)</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "chart-line"]} />
                <span> {movie.popularity}</span>
              </p>
              <h4>Overview</h4>
              <p>
                <span> {movie.overview}</span>
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default MovieCard;