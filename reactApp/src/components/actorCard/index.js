import React from "react";
import { Link } from "react-router-dom";
import "./actorCard.css";
import "../../globals/fontawesome";

const ActorCard = ({ actor }) => {

  return (
    <div className="col-sm-2">
      <div className="card">
        <div className="container">
          <Link to={`/actor/trending/${actor.id}`}>
            <img id="imagePerson"
              className="card-img-tag center"
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>
          <div className="card-body">
          <h4 className="card-title">{actor.name}</h4>            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ActorCard;