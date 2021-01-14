import React from "react";
import { Link } from "react-router-dom";
import "./actorCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActorCard = ({ actor }) => {

  return (
    <div className="col-sm-5">
      <div className="card">
        <div className="row">
          <div className="col-lg-6">
            <Link to={`/actor/trending/${actor.id}`}>
              <img id="imagePerson"
                className="card-img-tag center"
                alt={actor.name}
                id="cardImg"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : "./film-poster-placeholder.png"
                }
              />
            </Link>
          </div>
          <div className="col-lg-6">
            <h4 className="card-title">{actor.name}</h4>
            <p>
              <FontAwesomeIcon icon={["fas", "chart-line"]} />
              <span><b>Also Known As: </b>{actor.popularity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;