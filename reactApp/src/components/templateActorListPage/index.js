import React, { useState } from "react";
import Header from "../headerActorList";
import ActorList from "../actorList";
// import FilterControls from "../filterControlsPerson";

const ActorListPageTemplate = ({ actors, title/*, action */}) => {
//   const [nameFilter, setNameFilter] = useState("");
  
//   let displayedPersons = persons
//     .filter(m => {
//       return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
//     });

//   const handleChange = (type, value) => {
//     if (type === "name") setNameFilter(value);
//   };

  return (
    <>
      <Header title={title} numPersons={actors.length} />
      {/* <FilterControls onUserInput={handleChange} numPersons={displayedPersons.length}/> */}
      <ActorList
    //    action={action}
       actors={actors}
      ></ActorList>
    </>
  );
};

export default ActorListPageTemplate ;