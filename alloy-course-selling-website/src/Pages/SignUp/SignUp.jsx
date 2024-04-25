import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPageImage from "../../../public/images/loginpage images/login page.png";
import googleLogo from "../../../public/images/logos/google logo.png";
import facebookLogo from "../../../public/images/logos/facebook logo.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/config";
import defaultUserProfile from "../../images/defaultUser.png";

const auth = getAuth(app);

const SignUp = () => {
  /* use navigate from react router dom */
  const navigate = useNavigate();
  /*submit Event Handler */
  const signUpHandler = (event) => {
    event.preventDefault();
    // const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.text.value;
    /* console.log(email, password, name); */

    /* create a use with email and password */
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/myLearning");

        /* Default name and image while sign up with email and password */
        updateProfile(user, {
          displayName: name,
          photoURL: defaultUserProfile,
        })
          .then(() => {
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log("An error occurred!", error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return (
    /* The whole container */
    <div className="flex items-center justify-center py-20">
      {/* Parent container */}
      <div className="flex justify-center items-center">
        {/* Child 1 */}
        <div className="bg-[#FBF4EC] lg:h-[680px] flex justify-center">
          <img className="w-full my-auto mx-0" src={loginPageImage} />
        </div>
        {/* Child 2 */}
        <div className="p-5">
          <h1 className="text-4xl font-extrabold mb-3 dark:text-white">
            Welcome!
          </h1>
          <p className="font-semibold dark:text-white">
            Get started by creating a free account
          </p>

          {/* form starts from here */}
          <form onSubmit={signUpHandler}>
            <label htmlFor="name">
              <p className="pl-2  mt-3 dark:text-white">Name</p>
            </label>
            {/* Name Field */}
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="text"
              name="text"
              id=""
              placeholder="Enter your name"
              required
            />
            {/* Email Field */}
            <label htmlFor="email">
              <p className="pl-2  mt-3 dark:text-white">Email</p>
            </label>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              required
            />
            {/* Password Field */}
            <label htmlFor="password">
              <p className="pl-2  mt-3 dark:text-white">Password</p>
            </label>
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Enter a strong password"
              required
            />

            {/* Sign Up Button */}
            <label htmlFor="sign-up"></label>
            <input
              type="submit"
              value="Sign up"
              className="block bg-[#27262A] dark:bg-[#D9D9D9] text-white dark:text-black font-semibold py-3 w-96 rounded-full mt-3 cursor-pointer"
            />
            {/* GOOGLE sign up */}
            <button className="border-2 border-black dark:border-white text-[#27262A] dark:text-white py-3 w-96 rounded-full mt-3 hidden">
              <img className="inline w-6 h-6 mr-2" src={googleLogo} />
              Sign up with Google
            </button>
            {/* Facebook SignUp */}
            <button className="block border-2 border-black dark:border-white text-[#27262A] dark:text-white  py-3 w-96 rounded-full mt-3 hidden">
              <img className="w-6 h-6 mr-2 inline" src={facebookLogo} />
              Sign up with Facebook
            </button>
          </form>

          <div className="mt-7 dark:text-white">
            <span>Already have an account?</span>
            <Link to={"/logIn"} className="underline ml-5">
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
