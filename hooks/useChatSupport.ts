"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/TIBBEEKV0u";

    document.body.appendChild(script);
  }, []);
};


