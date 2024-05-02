import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Bookmark = ({ course }) => {
    const user = useContext(AuthContext);
    // console.log(user)
    // console.log(course?._id)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    // const [formData, setFormData] = useState({});
    const onSubmit = (data) => {
        // setFormData(data);
        // send user data to database.................
        fetch(
            "http://localhost:5000/bookmarks",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Bookmarked successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    //  navigate('/');
                }
            });
        //------------end send user data to database
    };
    console.log(course)

    if (!user) {
        return (
            <Link to={'/login'}>
                <BookmarkIcon className="w-6 h-6 cursor-pointer dark:text-white"></BookmarkIcon>
            </Link>
        );
    }
    else {
        return (
            <div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <button>
                            <BookmarkIcon className="w-6 h-6 cursor-pointer dark:text-white"
                                type="submit"
                                value="Post"
                            ></BookmarkIcon>
                        </button>

                        {/* default user name and email  */}
                        <div className="hidden">
                        <input
                                {...register("date")}
                                value={new Date().toLocaleString()}
                            />
                             <input
                                {...register("idEmail")}
                                value={course._id + user.email}
                            />
                            <input
                                {...register("email")}
                                value={user?.email}
                            />
                            
                           
                            <input
                                {...register("bookmarkId")}
                                value={course._id}
                            />
                           
                        </div>


                    </form>
                </div>
            </div>
        );
    }
};

export default Bookmark;