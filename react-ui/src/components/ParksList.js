import React from "react";
import ParksListItem from "./ParksListItem.js";
const ParksList = props => {
  return (
    <div>
      {props.parks.map(function(park, index) {
        return <ParksListItem park={park} key={index} />;
      })}
    </div>
  );
};

export default ParksList;
