import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <Topbar onClick={openMenuHandler} menuOpen={menuOpen} />
      <Menu menuOpen={menuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
