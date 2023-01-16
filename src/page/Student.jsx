import { useState } from "react";
import "../style/Student.css";

export default function Student(prop) {
  const { data } = prop;
  const [chColor, setChColor] = useState("");
  function changeColor() {
    if (chColor === "active") {
      setChColor("rgb(9, 229, 9)");
      data[0].status = "active";
    } else if (chColor === "fail") {
      setChColor("red");
      data[0].status = "fail";
    } else if (chColor === "loading") {
      setChColor("rgb(243, 153, 19)");
      data[0].status = "loading";
    }
    return chColor;
  }
  return (
    <div className="student">
      <div className="img" style={{ backgroundColor: changeColor() }}>
        <img
          src="https://cuad.ask.fm/assets2/064/547/741/696/normal/966259_10200598094587862_251011299_o.jpg"
          alt=""
        />
      </div>
      <div className="name">{data[0].status}</div>
      <div className="btns">
        <button
          className="btn"
          id="active"
          onClick={() => {
            setChColor("active");
          }}
        >
          active
        </button>
        <button
          className="btn"
          id="fail"
          onClick={() => {
            setChColor("fail");
          }}
        >
          fail
        </button>
        <button
          className="btn "
          id="loading"
          onClick={() => {
            setChColor("loading");
          }}
        >
          loading
        </button>
      </div>
    </div>
  );
}
