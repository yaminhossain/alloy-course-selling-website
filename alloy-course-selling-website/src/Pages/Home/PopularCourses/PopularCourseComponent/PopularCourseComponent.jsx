// import PropTypes from 'prop-types';
import { ShoppingCartIcon, BookmarkIcon } from "@heroicons/react/24/outline";

const PopularCourseComponent = ({ course }) => {
  // console.log(item);
  return (
    <div>
      {/* --------------------------------------------
        Anik's work start from here 
        ------------------------------------------*/}
      {/* <div className=" w-72 bg-base-100 shadow-xl p-2 border mb-10 ms-10">
                <figure className="border">
                    <img className="h-40 w-full" src={item.courseBanner} alt="course" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title h-20">{item.courseTitle}</h2>
                    <div className=" text-[#6A6F73]">
                        <p className="mb-2">{item.teacherName}</p>

                        <div className="mb-2">
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.courseHours + "h+"}</p>
                                <p className=" border rounded-full text-center px-3 ">{item.modules + " " + "Modules"}</p>
                            </div>
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.milestones + " " + "Milestones"}</p>
                                <p className=" border rounded-full text-center px-3 ">{item.numberOfVideos + " " + "Videos"}</p>
                            </div>
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.numberOfQuizzes + " " + "Quizzes"}</p>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                    <div className="">
                        <div className="mb-2">
                            <h2 className="font-black text-lg">{"$" + " " + item.coursePrice}</h2>
                        </div>
                        <div className="mb-2">
                            <h2>Ratings:{" " + item.ratings}</h2>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 gap-2  ">
                        {item?.features?.map(item => (
                            <p key={item.id} className="border rounded-full ps-2 text-[#5624D0] bg-[#E0E0F8]">{item}</p>

                        ))}

                    </div>

                </div>
    </div> */}
      {/* --------------------------------------------
        Anik's work ends here 
        ------------------------------------------*/}
      <div className="grid  justify-center items-center">
        <div className="text-left border p-3 rounded-md shadow-lg w-72 flex flex-col justify-between">
          <div>
            {/* -----------------------Banner Image -------------------------*/}
            <img
              className="h-48 w-full object-fill"
              src={course.courseBanner}
              alt="course banner"
            />
            {/*----------------------- Course title ------------------------*/}
            <p className="text-left font-semibold my-4 text-lg">
              {course.courseTitle}
            </p>
            {/*------------------- Course Teacher Name -------------------*/}
            <p className="text-gray-500">{course.teacherName}</p>
            {/* ------------------Course Content details -------------------*/}
            <div className="text-gray-500 grid grid-cols-2 gap-2 text-center my-3">
              <p className="p-1 border border-gray-500 rounded-lg">
                {course.courseHours}h+
              </p>
              <p className="p-1 border border-gray-500 rounded-lg">
                {course.modules} modules
              </p>
              <p className="p-1 border border-gray-500 rounded-lg">
                {course.numberOfVideos} videos
              </p>
              <p className="p-1 border border-gray-500 rounded-lg">
                {course.numberOfQuizzes} Quizzes
              </p>
              <p className="p-1 border border-gray-500 rounded-lg">
                {course.courseHours} milestones
              </p>
            </div>
            {/* -------------Course Price & Bookmark----------------- */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg mb-4">$ {course.coursePrice}</p>
              <BookmarkIcon className="h-7"></BookmarkIcon>
            </div>
            {/*------------------------------ Features------------------------ */}
            <div className="text-blue-800 grid grid-cols-2 gap-1">
              {course.features.map((feature, index) => (
                <p
                  className="bg-blue-300 p-1 rounded-lg text-center"
                  key={index}
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
          {/* Add to cart button */}
          <div>
            <button className="border my-3 w-full p-4 font-semibold bg-violet-600 hover:bg-violet-700 text-white">
              Add To Cart
              <ShoppingCartIcon className="h-6 inline-block ml-4"></ShoppingCartIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseComponent;
