import PopularCourses from "../PopularCourses/PopularCourses";
import TopCategories from "../TopCategories/TopCategories";

const LoggedInHome = () => {
    return (
        <div>
            <TopCategories></TopCategories>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default LoggedInHome;