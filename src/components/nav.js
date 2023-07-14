// have button highlighted depending on selected comp

import "../styles/nav.css";
import "../images/assets/aboutIcon.png";
import { useEffect, useState } from "react";
import NavBtn from "./navBtn";

export default function Nav(props) {
  const defaultGap = "20px";

  const [gap, setGap] = useState(defaultGap);
  const [hoverActive, setHoverActive] = useState(false);

  useEffect(() => {
    if (hoverActive) {
      setGap("3px");
    } else {
      setGap(defaultGap);
    }
  }, [hoverActive]);

  function handleHoverActive(isActive) {
    setHoverActive(isActive);
  }

  return (
    <nav>
      <div className="navBtns" style={{ gap: gap }}>
        <NavBtn
          text={"About"}
          imgSrc={"aboutIcon"}
          handleClick={props.handleAboutClick}
          hoverActive={handleHoverActive}
          id={0}
          currentComp={props.currentComp}
        />
        <NavBtn
          text={"Projects"}
          imgSrc={"projectsIcon"}
          handleClick={props.handleProjectsClick}
          hoverActive={handleHoverActive}
          id={1}
          currentComp={props.currentComp}
        />
        <NavBtn
          text={"Contact"}
          imgSrc={"contactIcon"}
          handleClick={props.handleContactClick}
          hoverActive={handleHoverActive}
          id={2}
          currentComp={props.currentComp}
        />
      </div>
    </nav>
  );
}
