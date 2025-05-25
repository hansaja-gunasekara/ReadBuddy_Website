import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Domain from "./components/Domain";
import Milestones from "./components/Milestones";
import Documents from "./components/Documents";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Domain />
        <Milestones />
        <Documents />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
