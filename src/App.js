import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Card />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
