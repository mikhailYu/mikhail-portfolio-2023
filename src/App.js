import "./App.css";
import Nav from "./components/nav";
import Main from "./components/main";
import { useState } from "react";
import "./styles/tool.css";

function App() {
  const [currentComp, setCurrentComp] = useState(0);

  function handleAboutClick() {
    setCurrentComp(0);
  }

  function handleProjectsClick() {
    setCurrentComp(1);
  }

  function handleContactClick() {
    setCurrentComp(2);
  }

  return (
    <div className="App">
      <Nav
        handleAboutClick={handleAboutClick}
        handleProjectsClick={handleProjectsClick}
        handleContactClick={handleContactClick}
        currentComp={currentComp}
      />
      <Main currentComp={currentComp} />
    </div>
  );
}

// main page is just the nav and the main fills the rest of the screen.
// starts off on the about section
// when projects or contact is clicked =>
// the current sections fades and new one comes in
// elements show up one at a time but quickly

// each project has a static image with a play button
// when hovered over, it plays a quick demo of it showing features

export default App;
