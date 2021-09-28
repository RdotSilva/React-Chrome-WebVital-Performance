import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const App = () => {
  // Get the performance metric data when loaded
  useEffect(() => {
    chrome.runtime.sendMessage({
      type: "performance:metric",
  }, (data) => {
    console.log(data)
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
