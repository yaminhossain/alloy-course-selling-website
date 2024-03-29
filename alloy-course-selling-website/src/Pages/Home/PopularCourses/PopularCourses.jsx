import { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
const PopularCourses = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <>
            <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-56  mx-auto ">Popular Courses</h2>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="append-buttons">
                <button onClick={() => prepend()} className="prepend-2-slides">
                    {/* Prepend 2 Slides */}
                </button>
                <button onClick={() => slideTo(1)} className="prepend-slide">
                    {/* Slide 1 */}
                </button>
                <button onClick={() => slideTo(250)} className="slide-250">
                    {/* Slide 250 */}
                </button>
                <button onClick={() => slideTo(500)} className="slide-500">
                    {/* Slide 500 */}
                </button>
                <button onClick={() => append()} className="append-slides">
                    {/* Append Slide */}
                </button>
            </p>
        </>
    );
};

export default PopularCourses;