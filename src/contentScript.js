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

// TODO: Remove these logs. For now we will log to see what type of data the API is returning
getTTFB(console.log);
getLCP(console.log);
getFID(console.log);
getFCP(console.log);
getCLS(console.log);

console.log("TEST");
