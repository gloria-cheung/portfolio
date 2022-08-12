import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

import "./App.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
