import Banner from "../Banner/Banner";
import FeaturedTopicByCategory from "../FeaturedTopicByCategory/FeaturedTopicByCategory";
import InstructorJourney from "../InstructorJourney/InstructorJourney";
import JoinOurCommunity from "../JoinOurCommunity/JoinOurCommunity";
<<<<<<< HEAD
import RequestCourses from "../../Home/RequestCourses/RequestCourses";
=======
import RequestCourses from "../RequestCourses /RequestCourses";
>>>>>>> fd16701c077caea96c3f2e76687ba2c3a1b8b4a3
import PopularCourses from "../PopularCourses/PopularCourses";
import SchoolAndColleges from "../SchoolAndColleges/SchoolAndColleges";
import Sponsor from "../Sponsor/Sponsor";
import StudentThink from "../StudentThink/StudentThink";
import TopCategories from "../TopCategories/TopCategories";
import WonderfulJourney from "../WonderfulJourney/WonderfulJourney";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TopCategories></TopCategories>
            <FeaturedTopicByCategory></FeaturedTopicByCategory>
            <PopularCourses></PopularCourses>
            <SchoolAndColleges></SchoolAndColleges>
            <StudentThink></StudentThink>
            <RequestCourses></RequestCourses>
            <JoinOurCommunity></JoinOurCommunity>
            <WonderfulJourney></WonderfulJourney>
            <InstructorJourney></InstructorJourney>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;