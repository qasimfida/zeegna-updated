import React, { useState, useEffect, useRef } from "react";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import ResourceMShero from "../components/resourceMstwo/ResourceMShero";
import ResourceMStwo from "../components/resourceMstwo/ResourceMStwo";
function ResourcesMS() {
  return (
    <>
      {/* <ResourceMShero showSocialIcons={false} showReadMore={true} /> */}
      <ResourceMStwo />
      <StayConnectedSection />
    </>
  );
}

export default ResourcesMS;
