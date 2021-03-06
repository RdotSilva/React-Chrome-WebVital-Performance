import { getTTFB, getLCP, getFID, getFCP, getCLS } from "web-vitals";

// Info box where we will display all of the web-vitals info
const infoDiv = document.createElement("div");
infoDiv.style.position = "fixed";
infoDiv.style.left = 0;
infoDiv.style.top = 0;
infoDiv.style.zIndex = 0;
infoDiv.style.backgroundColor = "black";
infoDiv.style.color = "white";
infoDiv.style.padding = "1rem";
infoDiv.style.fontFamily = "Arial";
document.body.appendChild(infoDiv);

const metrics = {};

const gatherMetrics = ({ name, value }) => {
  metrics[name] = value;

  // Send the message to chrome background
  chrome.runtime.sendMessage({
    type: "performance:metric",
    name,
    value,
  });

  // Parse metric data into HTML
  const metricsHTML = Object.keys(metrics)
    .map((k) => `<div>${k}</div><div>${Math.round(metrics[k])}</div>`)
    .join("");

  // Add HTML metric data
  infoDiv.innerHTML = `
  <div style="font-weight:bold;font-size:x-large">Perf Metrics</div>
  <div style="display:grid; grid-template-columns: 1fr 1fr; grid-column-gap: 1rem;">
    <div>Metric</div>
    <div>Value</div>
    ${metricsHTML}
  </div>
    `;
};

getTTFB(gatherMetrics);
getLCP(gatherMetrics);
getFID(gatherMetrics);
getFCP(gatherMetrics);
getCLS(gatherMetrics);

console.log("TEST");
