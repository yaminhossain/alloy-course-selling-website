import { Link } from "react-router-dom";
import applyAsInstructor from "../../images/applyAsInstructor.png";
import { useContext, useEffect, useState } from 'react';
// import { useContext} from 'react';
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ApplyInstructor = () => {

  const user = useContext(AuthContext);
    console.log(user?.email);

  // const userr = "samsu@gmail.com" ;
  //   const { data: users = [], refetch } = useQuery([''], async () => {
  //     const res = await fetch(`http://localhost:5000/users/${user?.email}`)
  //     return res.json();
  // });

  // data fetch..............
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  const response = await fetch('https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/users'); // Specify the path to your JSON file in the public folder
        const response = await fetch(`http://localhost:5000/users/${user?.email}`); // Specify the path to your JSON file in the public folder
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]);

  console.log(userData)
  // console.log(users)

  //make admin function
  const handleMakeInstructor = data => {
    console.log(data)

    // fetch(`https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/users/admin/${user._id}`, {
    fetch(`http://localhost:5000/users/${data?._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount){
          // refetch();
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} updated`,
              showConfirmButton: false,
              timer: 1500
            })
      }
      })
  }

  return (
    <div className="">
      <div className="flex justify-center items-center h-[800px] gap-14">
        <div className="max-h-96">

          <img src={applyAsInstructor} alt="apply as an instructor" />
        </div>
        <div>
          <h1 className="text-3xl text-blue-950 dark:text-white w-80 text-justify leading-relaxed mb-6 font-serif font-semibold">Join as Instructor and inspire students around the world</h1>
          <Link to={"/instructor"}>
            <button onClick={() => handleMakeInstructor(userData)} className="p-5 rounded-full  text-white bg-indigo-700">Start teaching</button>
            {/* <button className="p-5 rounded-full  text-white bg-indigo-700">Start teaching</button> */}
          </Link>


        </div>
      </div>
    </div>
  );
};

export default ApplyInstructor;
