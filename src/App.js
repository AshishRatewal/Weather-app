import React from "react";
import Navbar from "./components/Navbar";
import WeatherToday from "./components/WeatherToday";
function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <WeatherToday />
      </div>
    </>
  );
}

export default App;
