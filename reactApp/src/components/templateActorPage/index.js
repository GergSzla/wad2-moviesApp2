import React from "react";
import ActorHeader from '../headerActor'
import "./actorPage.css";


const TemplateActorPage = ({ actor, children }) => {
    return (
        <>
            <div className="page">
                <ActorHeader actor={actor} />
                <div className="row">
                    <div className="col-3">
                        <img
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                                    : "./film-poster-placeholder.png"
                            }
                            className="person"
                            alt={actor.name}
                        />
                    </div>
                    <div className=" mTitle col-8">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TemplateActorPage