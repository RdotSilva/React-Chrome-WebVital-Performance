import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MetricData from "./components/MetricData";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to="/about" />
      <MetricData />;
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
