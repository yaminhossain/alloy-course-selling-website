const InstructorDashboardCourses = ({ course }) => {
  console.log("Course from dashboard", course);
  return (
    <div>
      <div className="text-left border p-3 rounded-md shadow-lg w-72">
        {/* -----------------------Banner Image -------------------------*/}
        <img
          className="h-48 w-full object-fill"
          src={course.courseBanner}
          alt="course banner"
        />
        {/*----------------------- Course title ------------------------*/}
        <p className="text-left font-semibold my-4 text-lg">
          {course.courseTitle}
        </p>
        {/*------------------- Course Teacher Name -------------------*/}
        <p className="text-gray-500">{course.teacherName}</p>
        {/* ------------------Course Content details -------------------*/}
        <div className="text-gray-500 grid grid-cols-2 gap-2 text-center my-3">
          <p className="p-1 border border-gray-500 rounded-lg">
            {course.courseHours}h+
          </p>
          <p className="p-1 border border-gray-500 rounded-lg">
            {course.modules} modules
          </p>
          <p className="p-1 border border-gray-500 rounded-lg">
            {course.numberOfVideos} videos
          </p>
          <p className="p-1 border border-gray-500 rounded-lg">
            {course.numberOfQuizzes} Quizzes
          </p>
          <p className="p-1 border border-gray-500 rounded-lg">
            {course.courseHours} milestones
          </p>
        </div>
        {/* ------------------------------Course Price----------------- */}
        <p className="font-bold text-lg mb-4">$ {course.coursePrice}</p>
        {/*------------------------------ Features------------------------ */}
        <div className="text-blue-800 grid grid-cols-2 gap-1">

        {
            course.features.map((feature,index)=><p className="bg-blue-300 p-1 rounded-lg" key={index}>{feature}</p>)
        }
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardCourses;
