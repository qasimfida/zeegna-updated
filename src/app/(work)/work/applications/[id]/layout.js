"use client";

import React from "react";
import WorkDetailsRightbar from "@/components/WorkDetailsRightbar";
import { usePageLayout } from "@/contexts/PageLayout";

export default function WorkLayout({ children }) {
  const { globalValue } = usePageLayout();
  return (
    <React.Fragment>
      {children}
      {/* {globalValue.hasRightbar && <WorkDetailsRightbar />} */}
    </React.Fragment>
  );
}
