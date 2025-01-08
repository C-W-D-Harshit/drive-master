"use client";

import { useEffect, useState } from "react";

/**
 * Type definition for supported operating systems
 */
type OperatingSystem = "windows" | "macos" | "linux" | "unknown";

/**
 * Custom hook to detect the operating system
 * @returns {OperatingSystem} The detected operating system
 */
function useOperatingSystem(): OperatingSystem {
  const [os, setOs] = useState<OperatingSystem>("unknown");

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();

    if (platform.includes("win")) {
      setOs("windows");
    } else if (platform.includes("mac")) {
      setOs("macos");
    } else if (platform.includes("linux")) {
      setOs("linux");
    }
  }, []);

  return os;
}

export default useOperatingSystem;
