import { useState } from "react";
import "../style/StudentPro.css";
export default function StudentProfile(prop) {
  const { data } = prop;
  const [chColor, setChColor] = useState("white");
  console.log(data.status);

  function changeColor() {
    if (data.status === "active") {
      setChColor("rgb(9, 229, 9)");
      return chColor;
    } else if (data.status === "fail") {
      setChColor("red");
      return chColor;
    } else if (data.status === "loading") {
      setChColor("rgb(243, 153, 19)");
      return chColor;
    }
  }
  return (
    <div className="profile" style={{ backgroundColor: changeColor() }}>
      <img
        src="https://cuad.ask.fm/assets2/064/547/741/696/normal/966259_10200598094587862_251011299_o.jpg"
        alt=""
      />
    </div>
  );
}
