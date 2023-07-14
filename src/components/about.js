import { useEffect, useState } from "react";
import toolsList from "./tools";
import "../styles/about.css";
import Tool from "./tool";
import uniqid from "uniqid";

export default function About(props) {
  const [tools, setTools] = useState(null);
  const [imgOpacity, setImgOpacity] = useState("0");
  const [toolsOpacity, setToolsOpacity] = useState("0");
  const [margin, setMargin] = useState("100px");
  const [disp, setDisp] = useState("none");

  useEffect(() => {
    if (props.currentComp != 0) {
      removePage();
    } else {
      createPage();
    }
  }, [props.currentComp]);

  function createPage() {
    let delay = 350;

    const toolsArr = toolsList.map((tool) => {
      delay += 30;
      return <Tool toolInfo={tool} delay={delay} key={uniqid()} />;
    });

    setTools(toolsArr);
    setToolsOpacity("100");

    setTimeout(() => {
      setDisp("flex");
      setTimeout(() => {
        setImgOpacity("100");

        if (window.innerWidth > 770) {
          setMargin("0px");
        }
      }, 50);
    }, 300);
  }

  function removePage() {
    setTimeout(() => {
      setImgOpacity("0");
      setToolsOpacity("0");
      if (window.innerWidth > 770) {
        setMargin("100px");
      }

      setTimeout(() => {
        setDisp("none");
      }, 150);
    }, 100);
  }

  return (
    <div className="aboutCont" style={{ display: disp }}>
      <div className="aboutContentCont" style={{ opacity: imgOpacity }}>
        <div className="aboutImgCont" style={{ marginRight: margin }}>
          <img
            className="aboutMikhailImg"
            src={require("../images/assets/con2.png")}
          />
        </div>

        <div className="aboutInfoCont">
          <div className="aboutHeaders">
            <h1 className="aboutH1">Mikhail Yuguy</h1>
            <h2 className="aboutH2">Web Developer/ Digital Artist</h2>
          </div>
          <p className="aboutInfoText">
            Hello, I am a full stack developer based in Auckland. Programming
            has become a great passion of mine as it allows me to solve
            problems, both complex and creative, in a challenging and satisfying
            way.
          </p>

          <p className="aboutInfoText">
            I have studied a variety of different technologies that would help
            me or are essential to the field. On top of that, I am always
            determined and looking forward to learning new and updated practices
            as technology rapidly evolves.
          </p>
        </div>
      </div>
      <div className="aboutToolsCont" style={{ opacity: toolsOpacity }}>
        {tools}
      </div>
    </div>
  );
}
