import React from "react";
import DisplaySurfspotsList from "../hooks/useSurfspots/FetchSurfspots";
import ButtonToggleMapView from "../common/button/ButtonViewMap";

const SurfSpots = () => {
  return (
    <>
      <ButtonToggleMapView />
      <DisplaySurfspotsList />
    </>
  );
};

export default SurfSpots;
