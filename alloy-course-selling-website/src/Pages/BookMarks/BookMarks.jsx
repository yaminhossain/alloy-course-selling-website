// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import CourseCardDesign from "../../Components/CourseCardDesign/CourseCardDesign";
import useBookmark from "../../Hooks/useBookmark";


const BookMarks = () => {

    const [Bookmarks] = useBookmark();

    // const user = useContext(AuthContext);
    // // data fetch..............
    // const [fetchData, setFetchData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://assignment-11-serve-site-kdls-8ept06ln5-anik12136s-projects.vercel.app/bookmarks/${user?.email}`); // Specify the path to your JSON file in the public folder
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setFetchData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [user]);

    // console.log(fetchData);

    return (
        <div className='text-center text-4xl'>
            {
                Bookmarks ?
                    <div className='mx-40 h-full'>
                        <>
                            <h2 className="text-center text-3xl my-6 rounded-b-lg w-90  mx-auto  "> Your Bookmarked courses</h2>

                            <div className='mt-10 grid grid-cols-3 gap-y-5'>
                                {Bookmarks?.map(item => (

                                    <CourseCardDesign key={item._id} course={item}>

                                    </CourseCardDesign>


                                ))}
                            </div>
                        </>
                    </div>
                    :
                    <div>
                        <Loading></Loading>
                    </div>
            }
        </div>
    );
};

export default BookMarks;