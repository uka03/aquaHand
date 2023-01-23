import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/Student.css";

export default function Student(prop) {
  const { data } = prop;
  const { userServices } = prop;
  // const [userData, setUserData] = useState(data);
  const navigate = useNavigate();

  const [chColor, setChColor] = useState("white");
  // console.log(userServices.updateUser);
  const userId = useParams();

  const user = data.filter((m) => m._id === userId.id);

  function changeColor(status) {
    if (status === "active") {
      setChColor("green");
      userServices.updateUser(user[0]._id, "active");
    } else if (status === "fail") {
      setChColor("red");
      userServices.updateUser(user[0]._id, "fail");
    } else if (status === "loading") {
      setChColor("yellow");
      userServices.updateUser(user[0]._id, "loading");
    }

    return chColor;
  }
  return (
    <div className="student">
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
                  <stop stopColor="#2219C0" />
                  <stop offset="1" stopColor="#D0208A" />
                </linearGradient>
              </defs>
            </svg>
            Гарах
          </button>
        </div>
      </div>
      <div className="studentMain">
        <div className="studentProfile">
          <div className="studentimg" id={chColor}>
            <img
              src="https://cuad.ask.fm/assets2/064/547/741/696/normal/966259_10200598094587862_251011299_o.jpg"
              alt=""
            />
          </div>
          <div className="btns">
            <button
              className="btn"
              onClick={() => changeColor("active")}
              id="btnGreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="90px"
                height="90px"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M35.4,38.8c-3.2,2.4-7.1,3.9-11.4,3.9C13.7,42.7,5.3,34.3,5.3,24c0-2.6,0.6-5.2,1.5-7.4"
                />
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M12.1,9.6C15.3,7,19.5,5.3,24,5.3c10.3,0,18.7,8.4,18.7,18.7c0,2.3-0.4,4.5-1.2,6.6"
                />
                <polyline
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  points="16.5,23.5 21.5,28.5 32,18"
                />
              </svg>
            </button>
            <button
              className="btn"
              onClick={() => changeColor("loading")}
              id="btnYellow"
            >
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="80px"
                height="80px"
                viewBox="0 0 50 50"
                space="preserve"
              >
                <path
                  fill="#FFF"
                  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </button>
            <button
              className="btn"
              onClick={() => changeColor("fail")}
              id="btnRed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_429_11083)">
                  <path
                    d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                    stroke="#FFF"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_11083">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
