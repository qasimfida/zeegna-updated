"use client";

import { DrawerProvider } from "@/contexts/Drawers";
import React from "react";

export default function EmployersLayout({ children }) {
  return (
    <React.Fragment>
      <DrawerProvider>{children}</DrawerProvider>
    </React.Fragment>
  );
}
