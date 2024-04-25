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
  const logOutHandler = () => {
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
            <Link  to={"/dashboard"}><button className="w-full  p-4 border-b-2">Dashboard</button></Link>
            <Link  to={"/applyInstructor"}><button className="w-full  p-4 border-b-2">Apply Instructor</button></Link>
            <button className="w-full  p-4 border-b-2"><Link to={"/"}>My Account</Link></button>
            <button className="w-full  p-4 border-b-2"><Link to={"/"}>My Chart</Link></button>
            <button className="w-full  p-4"><Link to={"/"}>Bookmarks</Link></button>
            <button className="w-full bg-violet-600 hover:bg-violet-500 p-4 text-white flex justify-center items-center gap-4" onClick={logOutHandler}>
              <PowerIcon className="w-5 inline-block"></PowerIcon>
              <p >Log Out</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
