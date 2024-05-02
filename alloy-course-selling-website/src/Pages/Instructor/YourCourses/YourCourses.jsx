import { useContext, useEffect, useState } from "react";
// import Loading from "../../../Components/Loading/Loading";
// import Swiper from "swiper";
// import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import InstructorDashboardCourses from "./InstructorDashboardCourses/InstructorDashboardCourses";

const YourCourses = () => {
  const user = useContext(AuthContext);
  console.log(user?.email);
  // data fetch..............
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/formCourses/${user?.email}`
        );
        // const response = await fetch("https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/formCourses");
        // const response = await fetch(`https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/formCourses/${user?.email}`);
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
  }, [user]);

  console.log(courses ? courses : "data nai");

  return (
    <div className="text-center">
      <p className="text-4xl my-7">Your Courses</p>
      <div className="flex justify-center items-center mb-6">
        <div className="grid lg:grid-cols-4 gap-y-5 w-3/4 md:grid-cols-3 lg:gap-x-4 md:gap-x-3">
          {courses?.map((course) => (
            <InstructorDashboardCourses
              course={course}
              key={course._id}
            ></InstructorDashboardCourses>
          ))}
        </div>
      </div>

      {/* ----------------- */}
    </div>
  );

  //  return (

  //  courses ?
  //     <div className='mx-40 h-full'>
  //         <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-60  mx-auto  ">Popular Courses</h2>

  //         <>
  //             <div className='mt-10'>
  //                 <Swiper
  //                     slidesPerView={3}
  //                     centeredSlides={false}
  //                     slidesPerGroupSkip={10}
  //                     grabCursor={true}
  //                     keyboard={{
  //                         enabled: true,
  //                     }}
  //                     breakpoints={{
  //                         10: {
  //                             slidesPerView: 3,
  //                             slidesPerGroup: 3,
  //                         },
  //                     }}
  //                     scrollbar={true}
  //                     navigation={true}
  //                     pagination={{
  //                         clickable: true,
  //                     }}
  //                     modules={[Keyboard, Scrollbar, Navigation, Pagination]}
  //                     className="mySwiper"
  //                 >

  //                     {/* mapping---------- */}

  //                     {courses?.map(item => (
  //                         <SwiperSlide
  //                             key={item.id}
  //                             item={item}
  //                         >
  //                             <PopularCourseComponent key={item.id} item={item}>

  //                             </PopularCourseComponent>

  //                         </SwiperSlide>
  //                     ))}
  //                 </Swiper>
  //             </div>
  //         </>
  //     </div>
  //     :
  //     <div>
  //         <Loading></Loading>
  //     </div>

  // );
};

export default YourCourses;
