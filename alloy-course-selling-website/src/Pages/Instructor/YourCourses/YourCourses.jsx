import { useEffect, useState } from "react";
// import Loading from "../../../Components/Loading/Loading";
// import Swiper from "swiper";
// import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import PopularCourseComponent from "../../Home/PopularCourses/PopularCourseComponent/PopularCourseComponent";

const YourCourses = () => {

    // data fetch..............
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://server-course-selling.vercel.app/formCourses');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(courses ? courses : "data nai");

    return (
        <div className="text-center">
            <p className="text-5xl">YourCourses</p>

            {courses?.map(item => (
                <SwiperSlide className=" flex"
                    key={item.id}
                    item={item}
                >
                    <PopularCourseComponent key={item.id} item={item} >

                    </PopularCourseComponent>

                </SwiperSlide>
            ))}

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