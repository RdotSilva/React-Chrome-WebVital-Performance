import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Footer from "./components/Footer";
import MetricData from "./components/MetricData";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MetricData />;
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
