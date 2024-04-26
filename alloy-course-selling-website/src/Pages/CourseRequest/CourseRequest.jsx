import { useForm } from "react-hook-form";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
const CourseRequest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <div className="min-h-[800px] flex flex-col pt-5 justify-center items-center">
        <div className="px-8 bg-slate-50 rounded-md max-w-[600px]">
          <h1 className="text-5xl mb-20">
            What do you want to learn next? Let us know.
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Course Title */}
            <div>
              <label htmlFor="question" className="text-left text-2xl ml-4">
                What is the course about?
              </label>
              <br />
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("courseTitle", { required: true })}
                placeholder="Provide a title that is related to your requested course"
              />
              <div>
                {errors.courseTitle && (
                  <p className="text-red-600 text-sm flex">
                    Please provide a course title
                  </p>
                )}
              </div>
            </div>
            {/* Question Description */}
            <div className="mt-4">
              <label
                htmlFor="questionDescription"
                className="text-left text-2xl ml-4"
              >
                Question description
              </label>
              <br />

              <textarea
                className="w-full h-52 border-2 border-black rounded-lg ps-4 focus:outline-none mt-3"
                name="questionDescription"
                id="questionDescription"
                cols="30"
                rows="10"
                placeholder="Provide us an elaborate description of your requested course. This will help our teacher to understand your preference."
                {...register("questionDescription", { required: true })}
              ></textarea>

              <div>
                {errors.questionDescription && (
                  <p className="text-red-600 text-sm flex">
                    Please provide a course description
                  </p>
                )}
              </div>
            </div>

            <button
              className="p-4 mt-2  text-white bg-purple-600 flex justify-center items-center gap-3"
              type="submit"
              value="Post"
            >
              Request
              <PaperAirplaneIcon className="inline-block w-4"></PaperAirplaneIcon>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseRequest;
