import React from "react";

import About from "./components/About";

import "./App.css";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="main-content">
        <Info />
        <About />
        <Interests />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
