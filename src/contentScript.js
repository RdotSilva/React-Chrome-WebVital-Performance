import { getTTFB, getLCP, getFID, getFCP, getCLS } from "web-vitals";

// Info box where we will display all of the web-vitals info
const infoDiv = document.createElement("div")
document.body.appendChild(infoDiv);

// TODO: Remove these logs. For now we will log to see what type of data the API is returning
getTTFB(console.log);
getLCP(console.log);
getFID(console.log);
getFCP(console.log);
getCLS(console.log);

console.log("TEST");
