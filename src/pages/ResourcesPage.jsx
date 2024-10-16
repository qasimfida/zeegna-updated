import { useState } from "react";
import ResorcesHero from "../components/resources/ResourcesHero";
import Tabs from "../components/resources/Tabs";
function ResourcesPage() {
  return (
    <>
      <ResorcesHero
        paraChange={``}
        showSocialIcons={false}
        showReadMore={true}
      />
      <Tabs />
    </>
  );
}

export default ResourcesPage;
