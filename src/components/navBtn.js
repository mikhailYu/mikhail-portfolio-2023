import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function NavBtn(props) {
  const defaultWidth = "40px";

  const [hover, setHover] = useState(false);

  const [imgSrc, setImgSrc] = useState(null);

  const [btnWidth, setBtnWidth] = useState(defaultWidth);
  const [textDisplay, setTextDisplay] = useState("none");
  const [textWidth, setTextWidth] = useState("0px");
  const [bgClr, setBgClr] = useState("black");

  const [gap, setGap] = useState("0px");

  useEffect(() => {
    if (hover) {
      props.hoverActive(true);
      setTextDisplay("inline");
      setTextWidth("60px");
      setGap("10px");
      expandBox();
    } else {
      props.hoverActive(false);
      setTextDisplay("none");
      setTextWidth("0px");
      setGap("0px");
      resetBox();
    }
  }, [hover]);

  useEffect(() => {
    if (props.currentComp === props.id) {
      setBgClr("var(--secondaryBgColour)");
    } else {
      setBgClr("black");
    }
  }, [props.currentComp]);

  useEffect(() => {
    if (props.imgSrc) {
      setImgSrc(require(`../images/assets/${props.imgSrc}.png`));
    }
  }, [props.imgSrc]);

  function expandBox() {
    setBtnWidth("150px");
  }

  function resetBox() {
    setBtnWidth(defaultWidth);
  }

  return (
    <div className="navBtnCont">
      <div
        className="navBtn"
        onMouseEnter={() => {
          setHover(true);
          setBgClr("var(--secondaryBgColour)");
        }}
        onMouseLeave={() => {
          setHover(false);
          if (props.currentComp != props.id) {
            setBgClr("black");
          }
        }}
        style={{ width: btnWidth, gap: gap, backgroundColor: bgClr }}
        type="button"
        onClick={() => {
          props.handleClick();
        }}
      >
        <img className="navBtnImg" src={imgSrc} />
        <div className="navBtnTextMask" style={{ width: textWidth }}>
          <p className="navBtnText">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
