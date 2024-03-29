import Banner from "../Banner/Banner";
import FeaturedTopicByCategory from "../FeaturedTopicByCategory/FeaturedTopicByCategory";
import PopularCourses from "../PopularCourses/PopularCourses";
import SchoolAndColleges from "../SchoolAndColleges/SchoolAndColleges";
import TopCategories from "../TopCategories/TopCategories";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TopCategories></TopCategories>
            <FeaturedTopicByCategory></FeaturedTopicByCategory>
            {/* <PopularCourses></PopularCourses> */}
            <SchoolAndColleges></SchoolAndColleges>
        </div>
    );
};

export default Home;