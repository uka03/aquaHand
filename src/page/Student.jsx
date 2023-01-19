import { useState } from "react";
import { useParams } from "react-router-dom";
import "../style/Student.css";

export default function Student(prop) {
  const { data } = prop;
  const { userServices } = prop;
  const [userData, setUserData] = useState(data);
  const [chColor, setChColor] = useState("white");
  // console.log(userServices.updateUser);
  const userId = useParams();

  console.log(data, "ene bol miii data");
  const user = userData.filter((m) => m._id === userId.id);
  console.log(user[0]._id, "uka");
  function changeColor() {
    if (chColor === "active") {
      setChColor("rgb(9, 229, 9)");

      userServices.updateUser(user[0]._id, "active");
    } else if (chColor === "fail") {
      setChColor("red");

      userServices.updateUser(user[0]._id, "fail");
    } else if (chColor === "loading") {
      setChColor("rgb(243, 153, 19)");
      userServices.updateUser(user[0]._id, "loading");
    }
    console.log(data);
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
      <div className="name">{user[0].name}</div>
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
