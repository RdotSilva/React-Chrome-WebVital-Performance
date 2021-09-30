import React, { useEffect, useState } from "react";

const METRICS = ["TTFB", "LCP", "FID", "FCP", "CLS"];

/**
 * Component used to render MetricData taken in from Google Chrome runtime
 */
export default function MetricData() {
  const [metricData, setMetricData] = useState({});

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

  return (
    <div>
      <h1>Page Metrics</h1>
      <table>
        <thead>
          <tr>
            <th width="20%"></th>
            {METRICS.map((metric) => (
              <th key={metric} width="16%">
                {metric}
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
