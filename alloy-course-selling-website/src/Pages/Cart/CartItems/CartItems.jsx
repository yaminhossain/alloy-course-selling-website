// import { XCircleIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

import GetAccess from "../../../Components/GetAccess/GetAccess";

const CartItems = ({ cartItem }) => {


  return (
    <div className="flex justify-between border-t-2 px-4">
      <div className="flex  gap-7 py-4">
        <div className="w-20 h-20 ">
          <img className="w-full h-full" src={cartItem.courseBanner} alt=""/>
        </div>
        <div>
          <h1 className="font-bold">{cartItem.courseTitle}</h1>
          <p className="text-gray-500">By {cartItem.teacherName}</p>
          <div className="text-gray-500 flex gap-2 text-center my-3">
            <p className="p-1 border border-gray-500 rounded-lg">
              {cartItem.courseHours}h+
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {cartItem.modules} modules
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {cartItem.numberOfVideos} videos
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {cartItem.numberOfQuizzes} Quizzes
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {cartItem.courseHours} milestones
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {/* <XCircleIcon className="w-6 h-6 text-red-600 cursor-pointer"></XCircleIcon> */}
        <p className="text-violet-700 font-bold px-9">
          ${cartItem.coursePrice}
        </p>
        <GetAccess></GetAccess>
      </div>
      <div>
          <button className="border px-2 py-1 mt-2 bg-red-800 text-white hover:bg-red-600 rounded-full  ">Delete</button>
      </div>
    </div>
  );
};

export default CartItems;
