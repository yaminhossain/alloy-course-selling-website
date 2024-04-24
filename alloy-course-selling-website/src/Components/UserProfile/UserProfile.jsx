import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import defaultUser from "../../images/defaultUser.png";
import { PowerIcon } from '@heroicons/react/24/solid'

import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/config";

const auth = getAuth(app);


/* Log out is handling from here */
const UserProfile = () => {
  const navigate = useNavigate()
  const logOutHandler=()=>{
    signOut(auth).then(() => {
      console.log("User successfully signed out")
      navigate("/login");
    }).catch((error) => {
      console.log(error.message)
    });
  }



  const user = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleMenu}>
        <img
          className=" rounded-full h-9"
          src={user.photoURL === null ? defaultUser : user.photoURL}
          alt="user"
        />
      </div>
      {isOpen && (
        <div className="absolute inline-block top-12 right-2 bg-white border border-gray-300  shadow-md w-80">
          <div className="flex justify-between items-center p-4 border-b-2 mb-2">
            <img
              className="h-10 rounded-full"
              src={user.photoURL === null ? defaultUser : user.photoURL}
              alt="user profile picture"
            />
            <div>
              <p className="font-semibold text-left">
                {user.displayName ? user.displayName : "User"}
              </p>
              <p className="font-thin text-[14px] text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
          <div >
            <Link to={""}>My Account</Link>
            <div>
            <PowerIcon className="w-4 inline-block"></PowerIcon>
            <button onClick={logOutHandler}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
