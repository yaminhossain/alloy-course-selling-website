
// import PropTypes from 'prop-types';
const PopularCourseComponent = ({ item }) => {
    // console.log(item);
    return (
        <div>
            <div className=" w-72 bg-base-100 shadow-xl p-2 border mb-10 ms-10">
                <figure className="border">
                    <img className="h-40 w-full" src={item.courseBanner} alt="course" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title h-20">{item.courseTitle}</h2>
                    <div className=" text-[#6A6F73]">
                        <p className="mb-2">{item.teacherName}</p>

                        <div className="mb-2">
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.courseHours + "h+"}</p>
                                <p className=" border rounded-full text-center px-3 ">{item.modules + " " + "Modules"}</p>
                            </div>
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.milestones + " " + "Milestones"}</p>
                                <p className=" border rounded-full text-center px-3 ">{item.numberOfVideos + " " + "Videos"}</p>
                            </div>
                            <div className="flex gap-2 my-1">
                                <p className=" border rounded-full text-center px-3 ">{item.numberOfQuizzes + " " + "Quizzes"}</p>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                    <div className="">
                        <div className="mb-2">
                            <h2 className="font-black text-lg">{"$" + " " + item.coursePrice}</h2>
                        </div>
                        <div className="mb-2">
                            <h2>Ratings:{" " + item.ratings}</h2>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 gap-2  ">
                        {item?.features?.map(item => (
                            <p key={item.id} className="border rounded-full ps-2 text-[#5624D0] bg-[#E0E0F8]">{item}</p>

                        ))}

                    </div>

                </div>
            </div>
        </div>

    );
};

export default PopularCourseComponent;