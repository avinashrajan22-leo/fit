import React from 'react'
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";
import About from "./Components/About";
import Benefits from "./Components/Benefits";
import Workout from "./Components/Workout";
import BMICalculator from "./Components/BMICalculator";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Workout />
      <BMICalculator />
      <Contact />
    </>
  );
}

export default App;