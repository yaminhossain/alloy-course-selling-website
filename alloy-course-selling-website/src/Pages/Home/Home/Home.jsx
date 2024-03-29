import Banner from "../Banner/Banner";
import FeaturedTopicByCategory from "../FeaturedTopicByCategory/FeaturedTopicByCategory";
import JoinOurCommunity from "../JoinOurCommunity/JoinOurCommunity";
import RequestCourses from "../RequestCourses /RequestCourses";
// import PopularCourses from "../PopularCourses/PopularCourses";
import SchoolAndColleges from "../SchoolAndColleges/SchoolAndColleges";
import StudentThink from "../StudentThink/StudentThink";
import TopCategories from "../TopCategories/TopCategories";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TopCategories></TopCategories>
            <FeaturedTopicByCategory></FeaturedTopicByCategory>
            {/* <PopularCourses></PopularCourses> */}
            <SchoolAndColleges></SchoolAndColleges>
            <StudentThink></StudentThink>
            <RequestCourses></RequestCourses>
            <JoinOurCommunity></JoinOurCommunity>
        </div>
    );
};

export default Home;