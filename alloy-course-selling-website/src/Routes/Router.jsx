import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Community from "../Pages/Community/Community";
import CourseRequest from "../Pages/CourseRequest/CourseRequest";
import Instructor from "../Pages/Instructor/Instructor";
import MyLearning from "../Pages/MyLearning/MyLearning";
import BookMarks from "../Pages/BookMarks/BookMarks";
import AddCourse from "../Pages/Instructor/AddCourse/AddCourse";
import YourCourses from "../Pages/Instructor/YourCourses/YourCourses";
import LoggedInHome from "../Pages/Home/LoggedInHome/LoggedInHome";
import ApplyInstructor from "../Components/ApplyInstructor/ApplyInstructor";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Cart from "../Pages/Cart/Cart";
import ViewRequestedCourse from "../Pages/Instructor/ViewRequestedCourse/ViewRequestedCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/page1",
        element: <Page1></Page1>,
      },
      {
        path: "/page2",
        element: <Page2></Page2>,
      },
      {
        path: "/page2",
        element: <Page2></Page2>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/courseRequest",
        element: <CourseRequest></CourseRequest>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/myLearning",
        element: <MyLearning></MyLearning>,
      },
      {
        path: "/bookMarks",
        element: <BookMarks></BookMarks>,
      },
      {
        path: "/addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/yourCourse",
        element: <YourCourses></YourCourses>,
      },
      {
        path: "/loggedInHome",
        element: <LoggedInHome></LoggedInHome>,
      },
      {
        path: "/applyInstructor",
        element: <ApplyInstructor></ApplyInstructor>,
      },
      {
        path: "/myAccount",
        element: <MyAccount></MyAccount>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/viewRequestedCourse",
        element: <ViewRequestedCourse></ViewRequestedCourse>,
      },
    ],
  },
]);
