import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const CommunityPost = ({ formData }) => {
  const user = useContext(AuthContext);

  return (
    <div>
        
      <div className="flex mt-9 justify-center items-center border h-full  max-w-[600px] bg-slate-50 rounded-md">
        <div className="max-w-[500px]">
          <h1 className="text-2xl mb-2">{formData?.questionTitle}</h1>

          <h1 className="text-gray-500 text-sm mb-5">{user?.displayName}</h1>

          <p>{formData?.questionDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
