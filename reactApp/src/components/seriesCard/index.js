import React from "react";
import { Link } from "react-router-dom";
import "./seriesCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SeriesCard = ({ series }) => {

    return (
        <div className="col-lg-5">
            <div className="card">
                <div className="row">
                <div className="col-lg-6">

                    <Link to={`/series/${series.id}`}>

                        <img
                            className="card-img-tag center"
                            alt={series.name}
                            id="cardImg"
                            src={
                                series.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
                                    : "./film-poster-placeholder.png"
                            }
                        />

                    </Link>
                    </div>
                    <div className="col-lg-6">

                    <div className="card-body">
                        <h4 className="card-title ">{series.name}</h4>
                        <p>
                            <FontAwesomeIcon icon={["fas", "calendar"]} />
                            <span> {series.first_air_date}</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                            <span> {series.vote_average} ({series.vote_count}) votes</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={["fas", "chart-line"]} />
                            <span> {series.popularity}</span>
                        </p>
                        <h4>Overview</h4>
                        <p>
                            <span> {series.overview}</span>
                        </p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeriesCard;