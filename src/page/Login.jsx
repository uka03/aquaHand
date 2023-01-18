import { useNavigate } from "react-router-dom";
import img from "../undraw_engineering_team_a7n2.svg";

export default function Login(prop) {
  const { data } = prop;
  const navigate = useNavigate();

  function checker(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let password = e.target.password.value;
    console.log("name", name);
    console.log("pass", password);
    data.map((user, index) => {
      if (user.name === name && user.password === password) {
        if (user.role) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          navigate(`/student/${user._id}`);
          console.log("hi student", user);
        } else {
          navigate(`/teacher`);
          console.log("hi teacher");
        }
      }
    });
  }
  return (
    <section className="h-screen bg-gray-300">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 ">
            <img src={img} className="w-4/5 mx-auto" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={checker}>
              <div className="mb-2">
                <label htmlFor="name">Enter your name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className=" py-5">
                  Enter your password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 w-full"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
