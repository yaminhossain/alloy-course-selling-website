import { useState } from "react";
import CourseProgress from "../../Components/CourseProgress/CourseProgress";
import { Link } from "react-router-dom";

const MyLearning = () => {

    const [courses, setCourses] = useState(null);



    return (
        <div className=''>

            {/* div-1 banner */}
            <div className="bg-[#2D2F31] text-white md:lg:px-80 pt-10">
                <h2 className="md:lg:text-3xl font-bold">My Learning</h2>
                <div className="flex pt-10 pb-28 justify-start gap-5">
                    <button><p className="">All courses</p></button>
                    <button><p className="">My Lists</p></button>
                    <button><p className="">Wishlist</p></button>
                    <button><p className="">Archived</p></button>
                    <button><p className="">Learning tools</p></button>
                </div>
            </div>

            {/* div-2 white-box */}
            <div className="mx-80  border border-[#D1D7DC] -mt-20 bg-white p-5">
                <div className="flex justify-start gap-5  ">
                    <p>clock</p>
                    <p>Schedule learning time</p>
                </div>
                <div className="flex pt-10 gap-3 ">
                    <button className="border bg-black text-white py-2  px-3">Get started</button>
                    <button className="">Dismiss</button>
                </div>
            </div>

            {/* div-3 sorting section */}
            <div className="px-80 flex justify-between mt-16">
                <div className=" flex gap-2 content-center items-end  ">
                    <div>
                        <p>Sort By</p>
                        <div className="border border-black py-2 px-3 ">
                            <button>Recently Accessed</button>
                        </div>
                    </div>
                    <div>
                        <p>Filter by</p>
                        <div className="border border-black py-2 px-3 ">
                            <button>Categories</button>
                        </div>

                    </div>
                    <div className="border border-black py-2 px-3 ">
                        <button>Progress</button>
                    </div>
                    <div className="border border-black py-2 px-3 ">
                        <button>Instructor</button>
                    </div>
                    <button className="py-2">Reset</button>
                </div>

                <div className="flex item-center mt-6 h-10">
                    <input type="text" className=" border border-black py-2 px-3" />
                    <p className="pt-2">search</p>
                </div>
            </div>


            {/* div-4 course progress */}
            {
                courses ? <CourseProgress></CourseProgress>
                    :
                    <>
                        <div className="mx-80  border border-[#D1D7DC] bg-[#2D2F31] text-white p-5 text-center mt-5 py-20">
                            <h2 className="text-5xl font-black">No Courses Taken Yet</h2>
                        </div>
                    </>
            }

            <div className="grid justify-center my-8">
                <Link to="/loggedInHome"><button className="text-center border px-3 py-2 border-zinc-950 hover:bg-black hover:text-white">Explore More</button></Link>
            </div>


        </div>
    );
};

export default MyLearning;