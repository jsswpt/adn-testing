import React, { useState, useEffect } from "react";

type ScreenTypes = "mobile" | "tablet" | "desktop";

export const useScreen = (): ScreenTypes => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  if (width < 768) {
    return "mobile";
  } else if (width > 768 && width < 1181) {
    return "tablet";
  } else {
    return "desktop";
  }
};
