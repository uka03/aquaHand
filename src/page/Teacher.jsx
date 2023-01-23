import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfile from "../components/StudentProfile";
import "../style/Teacher.css";
import { userServices } from "../util/service";
export default function Teacher() {
  const [data, setData] = useState();
  const [isHovering, setIsHovering] = useState(false);
  const [chColor, setChColor] = useState("white");

  const [name, setName] = useState("reset");
  const navigate = useNavigate();
  useEffect(() => {
    userServices
      .getAllUsers()
      .then((res) => res.json())
      .then((lol) => setData(lol.data));
  }, []);

  function hover(name, hover, color) {
    setIsHovering(hover);
    setName(name);
    setChColor(color);
  }

  function jd() {
    data.map((user) => {
      userServices.updateUser(user._id, "none");
    });
  }
  return (
    <div className="students">
      <div className="header">
        <div className="container headerContent">
          <h1 className="headerTitle">Aqua.</h1>
          <button className="logout" onClick={() => navigate("/")}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14L6.41 12.59L3.83 10L14 10V8L3.83 8L6.41 5.42L5 4L1.90735e-06 9L5 14ZM18 16L10 16V18H18C19.1 18 20 17.1 20 16L20 2C20 0.9 19.1 0 18 0H10V2H18L18 16Z"
                fill="white"
              />
              <path
                d="M5 14L6.41 12.59L3.83 10L14 10V8L3.83 8L6.41 5.42L5 4L1.90735e-06 9L5 14ZM18 16L10 16V18H18C19.1 18 20 17.1 20 16L20 2C20 0.9 19.1 0 18 0H10V2H18L18 16Z"
                fill="url(#paint0_linear_626_701)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_626_701"
                  x1="10"
                  y1="18"
                  x2="10"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2219C0" />
                  <stop offset="1" stop-color="#D0208A" />
                </linearGradient>
              </defs>
            </svg>
            Гарах
          </button>
        </div>
      </div>
      {data && (
        <div className="container studentMain">
          <div className="side">
            <StudentProfile data={data[10]} hover={hover} />
            <StudentProfile data={data[11]} hover={hover} />
            <StudentProfile data={data[12]} hover={hover} />
            <StudentProfile data={data[13]} hover={hover} />
            <StudentProfile data={data[14]} hover={hover} />
          </div>
          <div className="center">
            {" "}
            <div className="top">
              <StudentProfile data={data[9]} hover={hover} />
              <StudentProfile data={data[8]} hover={hover} />
              <StudentProfile data={data[7]} hover={hover} />
              <StudentProfile data={data[6]} hover={hover} />
              <StudentProfile data={data[5]} hover={hover} />
            </div>
            <div className="centerTop">
              <StudentProfile data={data[15]} hover={hover} />
              <StudentProfile data={data[16]} hover={hover} />
              <StudentProfile data={data[17]} hover={hover} />
              <StudentProfile data={data[18]} hover={hover} />
              <StudentProfile data={data[19]} hover={hover} />
            </div>
            {
              <button
                className="btnReset"
                style={{ backgroundColor: chColor }}
                onClick={jd}
              >
                {name}
              </button>
            }
          </div>
          <div className="side">
            <StudentProfile data={data[4]} hover={hover} />
            <StudentProfile data={data[3]} hover={hover} />
            <StudentProfile data={data[2]} hover={hover} />
            <StudentProfile data={data[1]} hover={hover} />
            <StudentProfile data={data[0]} hover={hover} />
          </div>
        </div>
      )}
    </div>
  );
}
