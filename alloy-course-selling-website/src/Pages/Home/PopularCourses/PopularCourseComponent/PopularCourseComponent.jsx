

const PopularCourseComponent = ({ item }) => {
    const { id, courseBanner, courseHours, coursePrice, courseTitle, enrolledCount, features, milestones, modules, numberOfQuizzes, numberOfVideos, ratings, teacherName } = { item };
    console.log(item);
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="h-40">
                    <img src={item.courseBanner} alt="course" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title">{item.courseTitle}</h2>
                    <div className="mt-2 text-[#6A6F73]">
                        <p>{item.teacherName}</p>
                        <div className="flex gap-2 my-1">
                            <p className=" border rounded-full text-center px-3 ">{item.courseHours + "h+"}</p>
                            <p className=" border rounded-full text-center px-3 ">{item.modules + " " + "Modules"}</p>


                        </div>
                        <div className="flex gap-2 my-1">
                            <p className=" border rounded-full text-center px-3 ">{item.milestones + " "}</p>
                            <p className=" border rounded-full text-center px-3 ">{item.numberOfVideos + " " + "Videos"}</p>
                        </div>
                        <div className="flex gap-2 my-1">
                            <p className=" border rounded-full text-center px-3 ">{item.numberOfQuizzes + " " + "Quizzes"}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-black text-lg">{"$" + " " + item.coursePrice}</h2>
                    </div>

                    <div className="grid grid-rows-2 grid-cols-2 gap-2  ">
                        {item.features.map(item => (
                            <p className="border rounded-full ps-2 text-[#5624D0] bg-[#E0E0F8]">{item}</p>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularCourseComponent;