import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import CourseNotCreated from "./CourseNotCreated/CourseNotCreated";
import YourCourses from "./YourCourses/YourCourses";
import ApplyInstructor from "../../Components/ApplyInstructor/ApplyInstructor";

const Instructor = () => {
  const user = useContext(AuthContext);
  const [instructorInfo, setInstructorInfo] = useState([]);
  console.log("the instructor", instructorInfo);

  const [insEmail, setInsEmail] = useState("");
  console.log(insEmail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*   const response = await fetch('http://localhost:8000/formCourses'); */
        const response = await fetch(
          `https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/formCourses/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setInstructorInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="border-2 flex justify-between items-center px-24 w-5/6 py-8">
          <h1>Jump into the course section</h1>

          <Link to={"/addCourse"}>
            {" "}
            <button className="text-white bg-purple-600 px-16 py-3 font-semibold ">
              Create Your Course
            </button>
          </Link>
        </div>
      </div>
    


    <div>

      {instructorInfo.length === 0 ? (
        <CourseNotCreated></CourseNotCreated>
      ) : (
        <YourCourses></YourCourses>
      )}
    </div>
    </div>
  );
};

export default Instructor;
