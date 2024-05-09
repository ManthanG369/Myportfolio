import React from "react";
import { About, Contact, Header, Skills, Work, Footer } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
