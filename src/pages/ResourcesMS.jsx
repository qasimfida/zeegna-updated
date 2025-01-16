import React, { useState, useEffect, useRef } from "react";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import ResourceMShero from "../components/resourceMstwo/ResourceMShero";
import ResourceMStwo from "../components/resourceMstwo/ResourceMStwo";
import ResourcesHero from "../components/resources/ResourcesHero";
function ResourcesMS() {
  return (
    <>
      <ResourcesHero showSocialIcons={false} showReadMore={false} />
      <ResourceMStwo />
      <StayConnectedSection />
    </>
  );
}

export default ResourcesMS;
