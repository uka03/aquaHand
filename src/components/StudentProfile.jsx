import { useEffect, useState } from "react";
import "../style/StudentPro.css";
export default function StudentProfile(prop) {
  useEffect(() => {
    if (data.status === "active") {
      setChColor("rgb(9, 229, 9)");
    } else if (data.status === "fail") {
      setChColor("red");
    } else if (data.status === "loading") {
      setChColor("rgb(243, 153, 19)");
    }
  }, []);
  const { data } = prop;
  const [chColor, setChColor] = useState("white");

  console.log(data.status);

  return (
    <div className="profile" style={{ backgroundColor: chColor }}>
      <img
        src="https://cuad.ask.fm/assets2/064/547/741/696/normal/966259_10200598094587862_251011299_o.jpg"
        alt=""
      />
    </div>
  );
}
