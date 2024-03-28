import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    /* The whole container */
    <div className="flex items-center justify-center py-20">
      {/* Parent container */}
      <div className="flex justify-center items-center">
        {/* Child 1 */}
        <div className="bg-[#FBF4EC] lg:h-[520px] flex justify-center">
          <img className="w-full my-auto mx-0" src="/public/images/loginpage images/login page.png" />
        </div>
        {/* Child 2 */}
        <div className="p-5">
          <h1 className="text-4xl font-extrabold mb-3">Welcome!</h1>
          <p className="font-semibold">Log in to your account</p>
          <label htmlFor="email">
            <p className="pl-2  mt-3 ">Email</p>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="example@mail.com"
            />
          </label>

          <label htmlFor="password">
            <p className="pl-2  mt-3">Password</p>{" "}
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Please enter your password"
            />
          </label>
          <br />
          <div className="text-right pt-2">
            <Link to={""} className="underline">
              Forgot Password?
            </Link>
          </div>

          <button className="block bg-[#27262A] text-white py-3 w-96 rounded-full mt-3">
            Log in
          </button>

          <button className="border-2 border-black text-[#27262A] py-3 w-96 rounded-full mt-3 ">
            <img
              className="inline w-6 h-6 mr-2"
              src="/public/images/logos/google logo.png"
            />
            Log in with Google
          </button>
          <button className="block border-2 border-black text-[#27262A] py-3 w-96 rounded-full mt-3">
            <img
              className="w-6 h-6 mr-2 inline"
              src="/public/images/logos/facebook logo.svg"
            />
            Log in with Facebook
          </button>
          <div className="mt-7">
            <span>Do not have an account yet?</span>
            <Link to={"/signUp"} className="underline ml-5">
              Create a free account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
