import { useEffect, useState } from "react";
import projectsList from "./projectsList";
import ProjectBox from "./projectBox";

import "../styles/projects.css";

import uniqid from "uniqid";

export default function Projects(props) {
  const [projects, setProjects] = useState(null);
  const [disp, setDisp] = useState("none");

  const [op, setOp] = useState("0");

  useEffect(() => {
    if (props.currentComp != 1) {
      removePage();
    } else {
      createPage();
    }
  }, [props.currentComp]);

  function createPage() {
    setTimeout(() => {
      setDisp("flex");
      setTimeout(() => {
        let delay = 100;
        const projectsArr = projectsList.map((project) => {
          delay += 50;
          return <ProjectBox key={uniqid()} project={project} delay={delay} />;
        });
        setProjects(projectsArr);
        setOp("100");
      }, 50);
    }, 300);
  }

  function removePage() {
    setTimeout(() => {
      setOp("0");
      setTimeout(() => {
        setDisp("none");
        setProjects(null);
      }, 150);
    }, 100);
  }

  return (
    <div className="projectsCont" style={{ display: disp, opacity: op }}>
      <h1 className="projectsH1">Projects:</h1>
      {projects}
    </div>
  );
}
