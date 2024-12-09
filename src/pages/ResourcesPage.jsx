import React, { useState } from "react";

import ResorcesHero from "../components/resources/ResourcesHero";
import Tabs from "../components/resources/Tabs";
import StayConnectedSection from "../components/stayConnected/StayConnected";
function ResourcesPage() {
  return (
    <>
      <ResorcesHero showSocialIcons={false} showReadMore={true} />
      <Tabs />
      <StayConnectedSection />
    </>
  );
}

export default ResourcesPage;
