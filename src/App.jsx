import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MetricData from "./components/MetricData";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MetricData />;
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
