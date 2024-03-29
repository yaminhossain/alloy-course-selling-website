import Banner from "../Banner/Banner";
import FeaturedTopicByCategory from "../FeaturedTopicByCategory/FeaturedTopicByCategory";
import PopularCourses from "../PopularCourses/PopularCourses";
import TopCategories from "../TopCategories/TopCategories";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="mx-40">
                <TopCategories></TopCategories>
                <FeaturedTopicByCategory></FeaturedTopicByCategory>
                <PopularCourses></PopularCourses>
            </div>
        </div>
    );
};

export default Home;