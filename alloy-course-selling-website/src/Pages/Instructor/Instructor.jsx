import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import CourseNotCreated from "./CourseNotCreated/CourseNotCreated";
import YourCourses from "./YourCourses/YourCourses"

const Instructor = () => {
 
  return (
    <div>
      <div className="flex justify-center">
      <div className="border-2 flex justify-between items-center px-24 w-5/6 py-8">
        <h1>Jump into the course section</h1>

        <Link to={"/addCourse"}> <button className="text-white bg-purple-600 px-16 py-3 font-semibold ">
          Create Your Course
        </button>
        </Link>
      </div>
      </div>
      <CourseNotCreated></CourseNotCreated>
      <YourCourses></YourCourses>

    </div>
  );
};

export default Instructor;
