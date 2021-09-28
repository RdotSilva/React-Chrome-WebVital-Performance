console.log("background.js");

const data = {};

// Read the message from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "performance:metric") {
    console.log(request);
    // TODO: Remove log and render data to React
    // Get the URL of the tab
    const tab = sender.tab.url.toString();
    data[tab] = data[tab] || {};

    // Initialize average metric data if it doesn't exist
    const name = request.name;
    data[tab][name] = data[tab][name] || {
      values: [],
      average: 0,
    };
    data[tab][name].values.push(request.value);

    // Calculate average
    data[tab][name].average =
      data[tab][name].values.reduce((a, v) => a + v, 0) /
      data[tab][name].values.length;
  }
});
