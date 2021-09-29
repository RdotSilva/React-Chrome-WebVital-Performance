import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MetricData from "./components/MetricData";

const App = () => {
  return <MetricData />;
};

ReactDOM.render(<App />, document.getElementById("app"));
