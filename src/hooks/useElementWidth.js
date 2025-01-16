"use client";

import React, { useEffect, useState } from "react";

export const useElementWidth = (ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const dynamicRef = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (
          entry.target === dynamicRef &&
          entry.target.offsetWidth !== width
        ) {
          setWidth(Math.floor(entry.target.offsetWidth));
        }
      }
    });

    if (dynamicRef) {
      resizeObserver.observe(dynamicRef);
    }

    return () => {
      if (dynamicRef) {
        resizeObserver.unobserve(dynamicRef);
      }
    };
  }, [ref, width]);

  return width;
};
