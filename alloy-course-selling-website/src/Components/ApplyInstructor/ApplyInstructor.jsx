import { Link } from "react-router-dom";
import applyAsInstructor from "../../images/applyAsInstructor.png";

const ApplyInstructor = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-[800px] gap-14">
        <div className="max-h-96">

        <img  src={applyAsInstructor} alt="apply as an instructor" />
        </div>
        <div>
        <h1 className="text-3xl text-blue-950 dark:text-white w-80 text-justify leading-relaxed mb-6 font-serif font-semibold">Join as Instructor and inspire students around the world</h1>
        <Link to={"/instructor"}>
          <button className="p-5 rounded-full  text-white bg-indigo-700">Start teaching</button>
        </Link>
        

        </div>
      </div>
    </div>
  );
};

export default ApplyInstructor;
