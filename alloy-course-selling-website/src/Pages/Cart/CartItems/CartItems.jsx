// import { XCircleIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const CartItems = ({ cartItem }) => {

  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
  }


  return (
    <div className="flex justify-between border-t-2 px-4">
      <div className="flex  gap-7 py-4">
        <div className="w-20 h-20 ">
          <img className="w-full h-full" src={cartItem.courseBanner} alt="" />
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
        {/* <GetAccess></GetAccess> */}
      </div>
      <div>
        <button onClick={() => handleDelete(cartItem._id)}
          className="border px-2 py-1 mt-2 bg-red-800 text-white hover:bg-red-600 rounded-full  ">Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
