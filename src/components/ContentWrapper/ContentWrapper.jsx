"use client";

import React from "react";
import { usePageLayout } from "@/contexts/PageLayout";
import cls from "classnames";

const ContentWrapper = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  const { globalValue } = usePageLayout();
  return (
    <div
      ref={ref}
      className={cls`w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] 2xl:w-[calc(100%-19.7rem)] ${className} `}
      {...rest}
    >
      {children}
    </div>
  );
});

ContentWrapper.displayName = "ContentWrapper";
export { ContentWrapper };
