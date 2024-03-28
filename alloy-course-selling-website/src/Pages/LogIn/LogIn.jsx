import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <div className="bg-[FBF4EC]">
          <img src="/public/images/loginpage images/login page.png" />
        </div>
        <div className="border-2">
          <h1>Welcome!</h1>
          <p>Log in to your account</p>
          <label htmlFor="email">
            <p className="pl-2">Email</p>

            <input
            className="w-80 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="example@mail.com"
            />
          </label>

          <label htmlFor="password">
            <p className="pl-2">Password</p>{" "}
            <input
            className="w-80 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Please enter your password"

            />
          </label>
          <br/>
          <Link to={""} className="underline relative left-48 top-3">Forgot Password?</Link>
        </div>
      </div>

      <Link to={"/signUp"}> This is Registration Page</Link>
    </div>
  );
};

export default LogIn;
