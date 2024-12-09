import React, { useState } from "react";

import ResorcesHero from "../components/resources/ResourcesHero";
import Tabs from "../components/resources/Tabs";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import ResourceMStwo from "../components/resourceMstwo/ResourceMStwo";
function ResourcesPage() {
  return (
    <>
      <ResorcesHero showSocialIcons={false} showReadMore={true} />
      <ResourceMStwo />
      <StayConnectedSection />
    </>
  );
}

export default ResourcesPage;
