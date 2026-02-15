import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(() => getInitialTheme());

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
