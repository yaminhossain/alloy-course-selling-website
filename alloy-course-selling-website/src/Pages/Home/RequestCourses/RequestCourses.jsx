import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RequestCourses = () => {
    return (
        <div className="flex items-center justify-between px-40 bg-[#F5F5F5] py-10 mt-20">

            <div>
                <img className="h-[520px]" src="../../../../public/images/homepage images/RequestCourses.png" alt="" />
            </div>

            <div className="w-80">
                <p className="text-[80px] font-extrabold">Request  </p>
                <p className="text-[80px] font-extrabold  -mt-8">Courses </p>
                <h2 className="text-3xl">Did not find the course you want?</h2>
                <h2 className=" text-lg my-5 mt-10">
                    Don’t worry! We provide an option where students can
                    request their favorable  courses.
                    Our wonderful teachers will help you any time
                </h2>

                <Link>
                    <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
                        Request Courses
                        <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default RequestCourses;