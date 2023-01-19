import { useEffect, useState } from "react";
import "../style/StudentPro.css";
import { userServices } from "../util/service";
export default function StudentProfile(prop) {
  const { data } = prop;
  const { hover } = prop;
  useEffect(() => {
    if (data?.status === "active") {
      setChColor("rgb(9, 229, 9)");
    } else if (data?.status === "fail") {
      setChColor("red");
    } else if (data?.status === "loading") {
      setChColor("rgb(243, 153, 19)");
    }
  }, []);

  const [chColor, setChColor] = useState("white");

  const handleMouseOver = () => {
    hover(data.name, true, chColor);
  };

  const handleMouseOut = () => {
    hover("reset", false, "white");
  };

  return (
    <div
      className="profile"
      style={{ backgroundColor: chColor }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src="https://cuad.ask.fm/assets2/064/547/741/696/normal/966259_10200598094587862_251011299_o.jpg"
        alt=""
      />
    </div>
  );
}
