import React from "react";
import "./actorDetails.css";


export default ({ actor }) => {
  return (
    <>
      <div className="backg">
        <h2>
          
          <a href={actor.homepage}>
          {actor.name}
          {"  "}
          </a>
        </h2>
        <div className="row"><h4 className="badge badge-dark">Also Known As</h4>
        <p>{actor.also_known_as},&nbsp; </p></div>

        <h1 className="badge badge-dark">Biography</h1>
        <p id="biog">{actor.biography}</p>

        <div className="row"><h4 className="badge badge-dark">Birthday</h4>
        <p>{actor.birthday}</p></div>

        <div className="row"><h4 className="badge badge-dark">Gender</h4>
        <p>{actor.gender}</p></div>

        <div className="row"><h4 className="badge badge-dark">Popularity</h4>
        <p>{actor.popularity}</p></div>

        <div className="row"><h4 className="badge badge-dark">Place Of Birth</h4>
        <p>{actor.place_of_birth}</p></div>
      </div>
    </>
  );
};