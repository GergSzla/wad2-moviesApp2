import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {ActorsContext} from '../contexts/actorContext'

const PersonListPage = () => {
  const context = useContext(ActorsContext);
  const actors = context.actors

  return (
    <PageTemplate
      title="Trending Actors"
      actors = {actors}
    />
  );
};

export default PersonListPage;