import React, { useEffect } from "react";

/**
 * Component used to render MetricData taken in from Google Chrome runtime
 */
export default function MetricData() {
  // Get the performance metric data when loaded
  useEffect(() => {
    chrome.runtime.sendMessage(
      {
        type: "performance:metric",
      },
      (d) => {
        console.log(d);
      }
    );
  }, []);

  return <div></div>;
}
