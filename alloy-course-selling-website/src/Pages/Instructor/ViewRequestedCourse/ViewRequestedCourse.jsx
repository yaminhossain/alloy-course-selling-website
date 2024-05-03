import { useEffect, useContext, useState } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import RequestedCourse from "./RequestedCourse";

const ViewRequestedCourse = () => {
  /* const user = useContext(AuthContext); */
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-11-serve-site-kdls-6ww02uv0l-anik12136s-projects.vercel.app/courseRequest");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(courses);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-2/5 border my-16 rounded-md p-4 bg-slate-200 shadow-md">
          <h1 className="text-4xl my-8">View All Requested Courses</h1>
          {courses.map((data) => 
            <RequestedCourse item={data} key={data._id}></RequestedCourse>)}
        </div>
      </div>
    </>
  );
};

export default ViewRequestedCourse;
