import { Link } from "react-router-dom";

const Instructor = () => {
    return (
      <div>
        <div className='text-center text-4xl'>
            Instructor page






            {/* add course and your courses-------------- */}
            <div className="flex justify-center ">
                <div className="grid justify-center my-8">
                    <Link to={"/addCourse"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">Add course</button></Link>
                </div>
                <div className="grid justify-center my-8">
                    <Link to={"/yourCourse"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">Your courses</button></Link>
                </div>
            </div>
            {/* ------------------------------------------- */}
        </div>
        <div className="grid justify-center my-8">
          <Link to={"/yourCourse"}>
            <button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">
              Your courses
            </button>
          </Link>
        </div>

 </div>
   
  
  );
};

export default Instructor;
