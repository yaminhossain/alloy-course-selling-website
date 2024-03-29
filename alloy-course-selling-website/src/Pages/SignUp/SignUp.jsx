import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    /* The whole container */
    <div className="flex items-center justify-center py-20">
      {/* Parent container */}
      <div className="flex justify-center items-center">
        {/* Child 1 */}
        <div className="bg-[#FBF4EC] lg:h-[680px] flex justify-center">
          <img
            className="w-full my-auto mx-0"
            src="/public/images/loginpage images/login page.png"
          />
        </div>
        {/* Child 2 */}
        <div className="p-5">
          <h1 className="text-4xl font-extrabold mb-3">Welcome!</h1>
          <p className="font-semibold">
            Get started by creating a free account
          </p>
          <label htmlFor="name">
            <p className="pl-2  mt-3 ">Name</p>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="text"
              name="text"
              id=""
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="email">
            <p className="pl-2  mt-3 ">Email</p>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />
          </label>

          <label htmlFor="password">
            <p className="pl-2  mt-3">Password</p>{" "}
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Enter a strong password"
            />
          </label>
          <label htmlFor="confirm-password">
            <p className="pl-2  mt-3">Confirm Password</p>{" "}
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Re enter the password"
            />
          </label>
          <br />
          <div className="text-right pt-2">
            <Link to={""} className="underline">
              Forgot Password?
            </Link>
          </div>
          <label htmlFor="sign-up">
            <input
              type="submit"
              value="Sign up"
              className="block bg-[#27262A] text-white py-3 w-96 rounded-full mt-3 cursor-pointer"
            />
          </label>

          <button className="border-2 border-black text-[#27262A] py-3 w-96 rounded-full mt-3 ">
            <img
              className="inline w-6 h-6 mr-2"
              src="/public/images/logos/google logo.png"
            />
            Sign up with Google
          </button>
          <button className="block border-2 border-black text-[#27262A] py-3 w-96 rounded-full mt-3">
            <img
              className="w-6 h-6 mr-2 inline"
              src="/public/images/logos/facebook logo.svg"
            />
            Sign up with Facebook
          </button>
          <div className="mt-7">
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
