import React from "react";
import Actor from "../actorCard";
import "./actorList.css";

const ActorList = ({actors}) => {
  const actorCard = actors.map(m => (
    <Actor key={m.id} actor={m}/>
  ));
  return <div className="row persons">{actorCard}</div>;
};

export default ActorList;