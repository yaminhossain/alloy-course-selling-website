import { Link } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const AddCourse = () => {
  const user = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    fields: featureFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "features", // Name of the array field
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(
        "https://assignment-11-serve-site-kdls-4ci5nq6c3-anik12136s-projects.vercel.app/formCourses",
        {
          // const response = await fetch('https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/formCourses', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Form data sent successfully!");
        Swal.fire({
          title: "inserted successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
        e.target.reset();
      } else {
        console.error("Failed to send form data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" ">
      <div className="flex justify-center">
        <div className="border-2 flex justify-between items-center px-24 w-5/6 py-8">
          <h1>Students worldwide request courses</h1>

          <Link to={"/addCourse"}>
            {" "}
            {/* ----------------------------------------------
            Modal Start from here
            ----------------------------------------------- */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <Link to={"/viewRequestedCourse"}>
              <button className="text-white bg-purple-600 px-16 py-3 font-semibold">
                View all requested courses
              </button>
            </Link>
            {/* -----------------------------------------------------------------------------
            Modal Ends here
            --------------------------------------------------------------------------------------*/}
          </Link>
        </div>
      </div>
      <h2 className="text-4xl text-center my-7">Add your course</h2>

      {/* add course form */}
      <div className="flex items-center justify-center">
        <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid justify-around gap-5 lg:grid-cols-2 md:lg:grid-cols-1">
            {/* email */}
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("email")}
                value={user?.email}
              />
            </div>

            {/* name */}
            <div>
              <label htmlFor="Name">Name</label>
              <br />
              <input
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("teacherName")}
                value={user?.displayName}
              />
              <div>
                {errors.teacherName && (
                  <p className="text-red-600 text-sm flex">
                    teacherName is required.
                  </p>
                )}
              </div>
            </div>
            {/* course title */}
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <br />
              <input
                type="text"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("courseTitle", { required: true })}
                placeholder="Course Title"
              />
              <div>
                {errors.courseTitle && (
                  <p className="text-red-600 text-sm flex">
                    courseTitle is required.
                  </p>
                )}
              </div>
            </div>

            {/* image/banner */}
            <div>
              <label htmlFor="photoUrl">PhotoURL for course banner</label>
              <br />
              <input
                type="text"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full "
                {...register("courseBanner", { required: true })}
                placeholder="image link (course banner image)"
              />
              <div>
                {errors.courseBanner && (
                  <h2 className="text-red-600 text-sm flex">
                    image link is required.
                  </h2>
                )}
              </div>
            </div>
            {/* course hours */}
            <div>
              <label htmlFor="courseHour">Course Hours</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full "
                {...register("courseHours", { required: true })}
                placeholder="Course Hours"
              />
              <div>
                {errors.courseHours && (
                  <p className="text-red-600 text-sm flex">
                    courseHours is required.
                  </p>
                )}
              </div>
            </div>

            {/* course ID */}
            {/* <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('id', { required: true })} placeholder="course ID" />
                            <div>
                                {errors.id && <p className="text-red-600 text-sm flex">id is required.</p>}
                            </div>
                        </div> */}

            {/* Number of Milestones */}
            <div>
              <label htmlFor="NumberOfMilestones">Number of Milestones</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("milestones", { required: true })}
                placeholder="Number of Milestones"
              />
              <div>
                {errors.milestones && (
                  <p className="text-red-600 text-sm flex">
                    milestones is required.
                  </p>
                )}
              </div>
            </div>
            {/* Number of Modules */}
            <div>
              <label htmlFor="NumberOfModules">Number of Modules</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("modules", { required: true })}
                placeholder="Number of Modules"
              />
              <div>
                {errors.modules && (
                  <p className="text-red-600 text-sm flex">
                    modules is required.
                  </p>
                )}
              </div>
            </div>
            {/* number of Quizzes */}
            <div>
              <label htmlFor="NumberOfQuizzes">Number of Quizzes</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("numberOfQuizzes", { required: true })}
                placeholder="Number Of Quizzes"
              />
              <div>
                {errors.numberOfQuizzes && (
                  <p className="text-red-600 text-sm flex">
                    numberOfQuizzes is required.
                  </p>
                )}
              </div>
            </div>
            {/* number of video */}
            <div>
              <label htmlFor="NumberOfVideos">Number of Videos</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("numberOfVideos", { required: true })}
                placeholder="Number Of Videos"
              />
              <div>
                {errors.numberOfVideos && (
                  <p className="text-red-600 text-sm flex">
                    numberOfVideos is required.
                  </p>
                )}
              </div>
            </div>

            {/* course price */}
            <div>
              <label htmlFor="CoursePrice">Course price</label>
              <br />
              <input
                type="number"
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("coursePrice", { required: true })}
                placeholder="Course Price ($)"
              />
              <div>
                {errors.coursePrice && (
                  <p className="text-red-600 text-sm flex">
                    courseHours is coursePrice.
                  </p>
                )}
              </div>
            </div>

            {/* Course Categories */}
            <div>
              <label htmlFor="courseCategories">Categories</label>
              <br />
              <select
                className="border-2 border-black mt-2 ps-3 py-3  text-sm w-full rounded-full"
                {...register("courseCategories", { required: true })}
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="It and Software">It and Software</option>
                <option value="Personal development">
                  Personal development
                </option>
                <option value="Business">Business</option>
                <option value="Photography">Photography</option>
                <option value="Music">Music</option>
              </select>
              <div>
                {errors.courseCategories && (
                  <h2 className="text-red-600 text-sm flex">
                    Please Select a category
                  </h2>
                )}
              </div>
            </div>

            {/* enrolled count */}
            <div>
              <input
                className=" hidden border border-black mt-3  text-sm w-60 ps-3 py-2"
                {...register("enrollCount")}
                value={0}
              />
            </div>

            {/* <input className='border border-black mt-3 ps-3' {...register('ratings', { required: true })} placeholder="ratings" />
                        {errors.lastName && <p>ratings is required.</p>} */}
          </div>

          {/* ----------- array input for feature--------*/}
          <div className="py-2">
            {featureFields.map((field, index) => (
              <div key={field.id}>
                <input
                  className="border border-black mt-3 text-sm w-60 ps-3 py-2"
                  type="text"
                  {...register(`features.${index}`)}
                  // defaultValue={field.feature}
                  placeholder="Feature"
                />
                <button
                  type="button"
                  className="ps-2 hover:text-red-600 "
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-sm border bg-green-700 rounded-full  py-5 text-white mt-2 b w-full "
              onClick={() => append()}
            >
              + Add Feature
            </button>
          </div>
          {/* ----------- */}

          {/* clear / reload button */}

          {/* submit button */}

          <button
            className="p-4 mt-2 w-full text-white bg-purple-600 flex justify-center items-center gap-3 mb-"
            type="submit"
            value="Post"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="grid justify-center my-8">
          <Link to={"/instructor"}>
            <button className="text-center border px-3 py-2 border-zinc-950 bg-green-600 hover:bg-black hover:text-white">
              back to Instructor Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
