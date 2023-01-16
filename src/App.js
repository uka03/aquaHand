import "./app.css";
import Login from "./page/Login";
import { data } from "./util/data";
import Student from "./page/Student";
import { Route, Routes } from "react-router-dom";
import Teacher from "./page/Teacher";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login data={data} />} />
        <Route path="/teacher" element={<Teacher data={data} />} />
        <Route path="/student" element={<Student data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
