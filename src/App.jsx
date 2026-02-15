import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  // Logic to determine initial theme (LocalStorage > System Preference > Default Dark)
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    // Check system preference
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return userPrefersDark; 
  };

  // State initialization using lazy initializer
  const [dark, setDark] = useState(() => getInitialTheme());

  // Effect to apply theme class and save to localStorage
  useEffect(() => {
    // Toggles 'dark' class; removes it if dark is false
    document.body.classList.toggle("dark", dark);
    
    // Optional: add 'light' class specifically if your global.css requires it
    document.body.classList.toggle("light", !dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Handler for the theme toggle
  const toggleTheme = () => setDark(prevDark => !prevDark);

  return (
    <div className="app-container">
      <Navbar 
        isDark={dark} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        {/* Sections wrapped in main for better SEO/Accessibility */}
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;