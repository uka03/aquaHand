import StudentProfile from "../components/StudentProfile";
import "../style/Teacher.css";
export default function Teacher(prop) {
  const { data } = prop;
  console.log(data);
  return (
    <div className="students">
      <div className="top">
        <StudentProfile data={data[9]} />
        <StudentProfile data={data[8]} />
        <StudentProfile data={data[7]} />
        <StudentProfile data={data[6]} />
        <StudentProfile data={data[5]} />
      </div>
      <div className="bottom">
        <div className="left">
          <StudentProfile data={data[10]} />
          <StudentProfile data={data[11]} />
          <StudentProfile data={data[12]} />
          <StudentProfile data={data[13]} />
          <StudentProfile data={data[14]} />
        </div>
        <div className="center">
          <StudentProfile data={data[15]} />
          <StudentProfile data={data[16]} />
          <StudentProfile data={data[17]} />
          <StudentProfile data={data[18]} />
          <StudentProfile data={data[19]} />
        </div>
        <div className="right">
          <StudentProfile data={data[4]} />
          <StudentProfile data={data[3]} />
          <StudentProfile data={data[2]} />
          <StudentProfile data={data[1]} />
          <StudentProfile data={data[0]} />
        </div>
      </div>
    </div>
  );
}
