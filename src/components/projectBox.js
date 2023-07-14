import { useEffect, useState } from "react";
import toolsList from "./tools";
import Tool from "./tool";
import uniqid from "uniqid";

export default function ProjectBox(props) {
  const [disp, setDisp] = useState("none");

  const [tools, setTools] = useState(null);
  const [fileName, setFileName] = useState(null);

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const [githubLink, setGitHubLink] = useState(null);
  const [liveLink, setLiveLink] = useState(null);

  const [preview, setPreview] = useState(true);

  const [previewDisplay, setPreviewDisplay] = useState("");
  const [playIconDisp, setPlayIconDisp] = useState("none");

  const [scale, setScale] = useState("0");

  const [linksScale, setLinksScale] = useState("0");

  useEffect(() => {
    if (!props.project) {
      return;
    }
    setTimeout(() => {
      createBox();
    }, props.delay);
  }, [props.project]);

  useEffect(() => {
    if (fileName == null) {
      return;
    }
    if (preview) {
      let previewImg = (
        <img
          className="projImg"
          src={require(`../images/assets/projects/still/${fileName}.png`)}
        />
      );
      setPreviewDisplay(previewImg);
      setPlayIconDisp("block");
    } else {
      let previewImg = (
        <img
          className="projImg"
          src={require(`../images/assets/projects/gif/${fileName}.gif`)}
        />
      );
      setPreviewDisplay(previewImg);
      setPlayIconDisp("none");
    }
  }, [preview, fileName]);

  function createBox() {
    setDisp("flex");
    setTitle(props.project.title);
    setDesc(props.project.desc);
    setFileName(props.project.fileName);

    setGitHubLink(props.project.githubLink);
    setLiveLink(props.project.projectLink);

    let toolDelay = 150;

    let toolsArr = props.project.tools.map((toolID) => {
      let toolInfo = toolsList[toolID];
      toolDelay += 20;
      return <Tool toolInfo={toolInfo} delay={toolDelay} key={uniqid()} />;
    });

    setTools(toolsArr);

    setTimeout(() => {
      setScale("1");
      setTimeout(() => {
        setLinksScale("1");
      }, 400);
    }, 20);
  }

  return (
    <div
      className="projBoxCont"
      style={{ display: disp, transform: `scale(${scale})` }}
    >
      <div className="projUpperCont">
        <div
          className="projImgCont"
          onClick={() => {
            setPreview(!preview);
          }}
        >
          <img
            className="projPlay"
            src={require("../images/assets/play.png")}
            style={{ display: playIconDisp }}
          />
          {previewDisplay}
        </div>
        <div className="projToolsCont">{tools}</div>
      </div>

      <div className="projBottomCont">
        <h1 className="projTitle">{title}</h1>
        <div className="projDescCont">
          <p className="projDescText">{desc}</p>
        </div>
        <div className="projLinks">
          <a href={liveLink} target={"_blank"}>
            <img
              className="projLink"
              style={{
                filter: "brightness(100)",
                transform: `scale(${linksScale})`,
              }}
              src={require("../images/assets/linkto.png")}
            />
          </a>
          <a href={githubLink} target={"_blank"}>
            <img
              className="projLink"
              style={{
                filter: "brightness(100)",
                transform: `scale(${linksScale})`,
              }}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}
