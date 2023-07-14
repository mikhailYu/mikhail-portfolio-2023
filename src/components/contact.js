import { useEffect, useState } from "react";
import "../styles/contact.css";

export default function Contact(props) {
  const [disp, setDisp] = useState("none");
  const [opacity, setOpacity] = useState("0");
  const [scale, setScale] = useState("scale(0)");

  useEffect(() => {
    if (props.currentComp != 2) {
      removePage();
    } else {
      createPage();
    }
  }, [props.currentComp]);

  function createPage() {
    setTimeout(() => {
      setDisp("flex");
      setTimeout(() => {
        setOpacity("100");
        setScale("scale(1)");
      }, 50);
    }, 300);
  }

  function removePage() {
    setTimeout(() => {
      setOpacity("0");
      setScale("scale(0)");
      setTimeout(() => {
        setDisp("none");
      }, 150);
    }, 100);
  }

  return (
    <div className="contactCont" style={{ display: disp }}>
      <div className="contactTextCont" style={{ opacity: opacity }}>
        <h1 className="contactH1">Contact me:</h1>
        <p className="contactText">
          It would be great to get in contact. My business email is{" "}
          <span className="contactSpan">mikhailyuguy01@gmail.com</span>. Don't
          hesitate to reach out!
        </p>
        <p className="contactText">
          Check out my Github profile to stay up to date with my projects.
        </p>
      </div>

      <div className="contactLinks">
        <a href="https://github.com/mikhailYu" target={"_blank"}>
          <img
            className="contactLink"
            style={{ filter: "brightness(100)", transform: scale }}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            }
          />
        </a>

        <a
          href="https://www.linkedin.com/in/mikhail-yuguy-219a25191/"
          target={"_blank"}
        >
          <img
            style={{ transform: scale }}
            className="contactLink"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          />
        </a>
      </div>
    </div>
  );
}
