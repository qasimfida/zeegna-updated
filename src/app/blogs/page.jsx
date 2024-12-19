import React, { Suspense } from "react";
import Blogs from "@/containers/Blogs";

const page = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Blogs />
    </Suspense>
  );
};

export default page;
