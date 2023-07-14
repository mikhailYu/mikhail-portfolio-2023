import { useEffect, useState } from "react";
import "../styles/main.css";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

import uniqid from "uniqid";

export default function Main(props) {
  const [loadedComp, setLoadedComp] = useState(0);

  return (
    <div className="mainCont">
      <div className="mainCompCont">
        <About currentComp={props.currentComp} />
        <Projects currentComp={props.currentComp} />
        <Contact currentComp={props.currentComp} />
      </div>
    </div>
  );
}
