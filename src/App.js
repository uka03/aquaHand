import "./app.css";
import Login from "./page/Login";
import Student from "./page/Student";
import { Route, Routes } from "react-router-dom";
import Teacher from "./page/Teacher";
import { userServices } from "./util/service";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    userServices
      .getAllUsers()
      .then((res) => res.json())
      .then((lol) => setData(lol.data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login data={data} />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route
          path="/student/:id" element={<Student userServices={userServices} data={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
