import React from "react";
import OwnerDashboardParkListItem from "./OwnerDashboardParkListItem";

const OwnerDashboardParkList = ({ parks, handleDelete }) => {
  if (parks.length > 0) {
    return (
      <div>
        {parks.map((park, index) => {
          return <OwnerDashboardParkListItem park={park} key={index} handleDelete = {handleDelete} />;
        })}
      </div>
    );
  } else {
    return <div />;
  }
};
export default OwnerDashboardParkList;
