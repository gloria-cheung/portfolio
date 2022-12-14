import { useState } from "react";
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

  const openMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <Topbar onClick={openMenuHandler} menuOpen={menuOpen} />
      <Menu onClick={openMenuHandler} menuOpen={menuOpen} />
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
