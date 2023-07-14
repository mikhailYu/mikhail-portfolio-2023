import { useEffect, useState } from "react";
import "../styles/tool.css";

export default function Tool(props) {
  const [imgSrc, setImgSrc] = useState(null);
  const [toolName, setToolName] = useState(null);
  const [scale, setScale] = useState("0");

  const [opacity, setOpacity] = useState("0");
  const [filter, setFilter] = useState(null);

  // only show tool name on hover

  useEffect(() => {
    if (!props) {
      return;
    }
    setToolName(props.toolInfo.toolName);
    setImgSrc(props.toolInfo.icon);

    if (props.toolInfo.toolName === "Github") {
      setFilter("brightness(100)");
    }

    setInterval(() => {
      setOpacity("100");
      setScale("1");
    }, props.delay);
  }, [props]);

  return (
    <div
      className="toolBox"
      style={{ opacity: opacity, transform: `scale(${scale})` }}
    >
      <img className="toolImg" src={imgSrc} style={{ filter: filter }} />
      <p className="toolName">{toolName}</p>
    </div>
  );
}
