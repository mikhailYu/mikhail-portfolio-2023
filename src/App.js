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

export default App;
