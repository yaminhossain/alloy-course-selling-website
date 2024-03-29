// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import PopularCourseComponent from './PopularCourseComponent/PopularCourseComponent';

const PopularCourses = () => {


    // data fetch..............
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../../public/PopularCourses.json'); // Specify the path to your JSON file in the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(jsonData);
    return (
        <div>
            <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-60  mx-auto  ">Popular Courses</h2>

            <>
                <div className='mt-20'>
                    <Swiper
                        slidesPerView={3.5}
                        centeredSlides={false}
                        slidesPerGroupSkip={2}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >

                        {/* mapping---------- */}

                        {jsonData.map(item => (
                            <SwiperSlide
                                key={item.id}
                                item={item}
                            >
                                <PopularCourseComponent
                                    key={item.id}
                                    item={item}
                                ></PopularCourseComponent>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </>
        </div>
    );
};

export default PopularCourses;