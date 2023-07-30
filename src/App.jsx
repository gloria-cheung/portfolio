import { useState, useRef, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const newRef = useRef(null);
  const openMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuHandler);
    return () => {
      document.removeEventListener("mousedown", closeMenuHandler);
    };
  });

  const closeMenuHandler = (e) => {
    if (newRef.current && menuOpen && !newRef.current.contains(e.target)) {
      console.log("outside");
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div className="app">
      <span ref={newRef}>
        <Topbar onClick={openMenuHandler} menuOpen={menuOpen} />
        <Menu onClick={openMenuHandler} menuOpen={menuOpen} />
      </span>
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
