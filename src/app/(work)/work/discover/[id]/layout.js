"use client";

import React from "react";
import { usePageLayout } from "@/contexts/PageLayout";
import JobRightbar from "@/components/JobRightbar";

export default function DiscoverDetailsLayout({ children }) {
  const { globalValue } = usePageLayout();
  return (
    <React.Fragment>
      {children}
      {/* <JobRightbar /> */}
    </React.Fragment>
  );
}
