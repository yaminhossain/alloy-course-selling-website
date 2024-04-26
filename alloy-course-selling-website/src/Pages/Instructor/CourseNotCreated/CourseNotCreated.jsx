import React from "react";
import courseNotCreatedImage from "../../../images/courseNotCreatedImage.webp";
import { Link } from "react-router-dom";
const CourseNotCreated = () => {
  return (
    <div>
      <div className=" flex justify-center items-center h-[800px] gap-10">
        <div className="max-w-96">
          <img src={courseNotCreatedImage} alt="course not created" />
        </div>
        <div>
          <h1 className="text-3xl text-blue-950 dark:text-white w-80 text-justify leading-relaxed mb-6 font-serif font-semibold	">Lets start creating you first course</h1>
          <Link to={"/addCourse"}> <button className="text-white bg-purple-600 px-16 py-3 font-semibold t">
          Create Your Course
        </button>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default CourseNotCreated;
