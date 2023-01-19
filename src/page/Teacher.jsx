import { useEffect, useState } from "react";
import StudentProfile from "../components/StudentProfile";
import "../style/Teacher.css";
import { userServices } from "../util/service";
export default function Teacher() {
  const [data, setData] = useState();
  const [isHovering, setIsHovering] = useState(false);
  const [chColor, setChColor] = useState("white");
  const [name, setName] = useState("reset");
  useEffect(() => {
    userServices
      .getAllUsers()
      .then((res) => res.json())
      .then((lol) => setData(lol.data));
  }, []);
  console.log(data);
  function hover(name, hover, color) {
    setIsHovering(hover);
    setName(name);
    setChColor(color);
  }
  function jd() {
    data.map((user) => {
      userServices.updateUser(user._id, "none");
      console.log(user);
    });
  }
  return (
    <div className="students">
      {data && (
        <>
          <div className="top">
            <StudentProfile data={data[9]} hover={hover} />
            <StudentProfile data={data[8]} hover={hover} />
            <StudentProfile data={data[7]} hover={hover} />
            <StudentProfile data={data[6]} hover={hover} />
            <StudentProfile data={data[5]} hover={hover} />
          </div>
          <div className="bottom">
            <div className="left">
              <StudentProfile data={data[10]} hover={hover} />
              <StudentProfile data={data[11]} hover={hover} />
              <StudentProfile data={data[12]} hover={hover} />
              <StudentProfile data={data[13]} hover={hover} />
              <StudentProfile data={data[14]} hover={hover} />
            </div>
            <div className="center">
              <div className="centerPro">
                <StudentProfile data={data[15]} hover={hover} />
                <StudentProfile data={data[16]} hover={hover} />
                <StudentProfile data={data[17]} hover={hover} />
                <StudentProfile data={data[18]} hover={hover} />
                <StudentProfile data={data[19]} hover={hover} />
              </div>
              <button
                className="btnReset"
                style={{ backgroundColor: chColor }}
                onClick={jd}
              >
                {name}
              </button>
            </div>
            <div className="right">
              <StudentProfile data={data[4]} hover={hover} />
              <StudentProfile data={data[3]} hover={hover} />
              <StudentProfile data={data[2]} hover={hover} />
              <StudentProfile data={data[1]} hover={hover} />
              <StudentProfile data={data[0]} hover={hover} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
