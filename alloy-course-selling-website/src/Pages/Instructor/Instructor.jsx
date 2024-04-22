import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Instructor = () => {
  const name = useContext(AuthContext);
  return (
    <div className="text-center text-4xl">
      Instructor page
      {name ? (
        <p className="dark:text-white">{name.displayName}</p>
      ) : (
        <p className="dark:text-white"> {"hi my name is Yamin"}</p>
      )}
      {/* add course and your courses-------------- */}
      <div className="flex justify-center ">
        <div className="grid justify-center my-8">
          <Link to={"/addCourse"}>
            <button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">
              Add course
            </button>
          </Link>
        </div>
        <div className="grid justify-center my-8">
          <Link to={"/yourCourse"}>
            <button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">
              Your courses
            </button>
          </Link>
        </div>
      </div>
      {/* ------------------------------------------- */}
    </div>
  );
};

export default Instructor;
