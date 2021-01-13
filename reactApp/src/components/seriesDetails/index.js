import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "semantic-ui-css/semantic.min.css";
import "./seriesDetails.css";


export default ({ series }) => {
    // const [open, setOpen] = React.useState(false)

    return (
        <>
            <div className="backg">
                <h2>

                    <a href={series.homepage}>
                        {series.name}
                        {"  "}                    </a>
                </h2>

                <h1 className="badge badge-dark">Overview</h1>
                <p>{series.overview}</p>

                <div className="row"><h4 className="badge badge-dark">Series Tagline</h4>
                    <p>{series.tagline}</p></div>

                <div className="row"><h4 className="badge badge-dark">First Aired</h4>
                    <p>{series.first_air_date}</p></div>

                <div className="row"><h4 className="badge badge-dark">Popularity</h4>
                    <p>{series.popularity}</p></div>

                <div className="row"><h4 className="badge badge-dark">Status</h4>
                    <p>{series.status}</p></div>

                <div className="row"><h4 className="badge badge-dark">Genres</h4>
                    {series.genres.map(g => (
                        <p>{g.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Spoken Languages</h4>
                    {series.spoken_languages.map(lang => (
                        <p>{lang.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Production Companies</h4>
                    {series.production_companies.map(pc => (
                        <p>{pc.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Production Countries</h4>
                    {series.production_countries.map(pc => (
                        <p>{pc.name},&nbsp;</p>
                    ))}</div>

                <div className="row"><h4 className="badge badge-dark">Vote Average</h4>
                    <p>{series.vote_average}</p></div>

                <div className="row"><h4 className="badge badge-dark">Vote Count</h4>
                    <p>{series.vote_count}</p></div>

                {/* https://stackoverflow.com/questions/60559623/printing-attributes-of-an-object-array-as-a-grid-in-reactjs */}
                <div className="displayGrid">
                    {series.seasons.map(s => (
                        <div className="card">
                            <Link to={`/series/${series.id}/season/${s.season_number}`}>
                                <img
                                    className="card-img-tag center "
                                    alt={s.name}
                                    src={
                                        s.poster_path
                                            ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
                                            : "./film-poster-placeholder.png"
                                    }
                                />
                            </Link>
                            <div className="card-body">
                                <h4 className="card-title ">{s.name}</h4>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "calendar"]} />
                                    <span> {s.air_date}</span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "clone"]} />
                                    <span> {s.episode_count}</span>
                                </p>
                            </div>
                        </div>

                    ))}


                </div>

            </div>
        </>

    );

};