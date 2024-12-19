import React, { Suspense } from "react";
import Employers from "@/containers/Employers";

const page = () => {
  return (
    <Suspense>
      <Employers />
    </Suspense>
  );
};

export default page;
