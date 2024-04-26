import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import CommunityPost from "./CommunityPost/CommunityPost";
const Community = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});

  const onSubmit = (data) => setFormData(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <div className="min-h-[800px] flex flex-col pt-5 justify-center items-center">
        <div className="px-8 bg-slate-50 rounded-md max-w-[600px]">
          <h1 className="text-5xl mb-20">Ask a public question</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Question Title */}
            <div>
              <label htmlFor="question" className="text-left text-2xl ml-4">
                Question title
              </label>
              <br />
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("questionTitle", { required: true })}
                placeholder="Provide a title that is related to your question"
              />
              <div>
                {errors.questionTitle && (
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
                placeholder="Explain your question"
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
              Post
              <PaperAirplaneIcon className="inline-block w-4"></PaperAirplaneIcon>{" "}
            </button>
            {/*  <div className="cursor-pointer p-4 mt-2 w-28 text-white bg-purple-600 flex justify-center items-center gap-3">
              <input type="submit" value="Post" />
              <PaperAirplaneIcon className="inline-block w-4"></PaperAirplaneIcon>
            </div> */}
          </form>
        </div>
        <CommunityPost formData={formData} key={1} />
      </div>
    </div>
  );
};

export default Community;
