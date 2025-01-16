<<<<<<< HEAD
import { useState } from "react";
import ResorcesHero from "../components/resources/ResourcesHero";
import Tabs from "../components/resources/Tabs";
import StayConnectedSection from "../components/stayConnected/StayConnected";
function ResourcesPage() {
  return (
    <>
      <ResorcesHero showSocialIcons={false} showReadMore={true} />
      <Tabs />
=======
import React, { useState } from "react";

import ResorcesHero from "../components/resources/ResourcesHero";
import Tabs from "../components/resources/Tabs";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import ResourceMStwo from "../components/resourceMstwo/ResourceMStwo";
function ResourcesPage() {
  return (
    <>
      <ResorcesHero showSocialIcons={false} showReadMore={false} />
      <ResourceMStwo />
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
      <StayConnectedSection />
    </>
  );
}

export default ResourcesPage;
