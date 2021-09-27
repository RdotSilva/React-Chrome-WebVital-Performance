console.log("background.js");

const data = {};

// Read the message from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "performance:metric") {
    console.log(request);
    // TODO: Remove log and render data to React
  }
});
