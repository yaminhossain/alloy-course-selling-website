import { Link } from "react-router-dom";
import { useForm, useFieldArray } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const AddCourse = () => {

    const user = useContext(AuthContext);
    console.log(user?.email)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const { fields: featureFields, append, remove } = useFieldArray({
        control,
        name: 'features', // Name of the array field
    });

    const onSubmit = async (data,e) => {
        e.preventDefault();
        console.log(data);
        try {
            const response = await fetch('http://localhost:8000/formCourses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Form data sent successfully!');
                Swal.fire({
                    title: 'inserted successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                e.target.reset();
            }
            else {
                console.error('Failed to send form data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className=" ">
            <h2 className="text-5xl text-center">Add your course</h2>

            {/* add course form */}
            <div>
                <form className='border border-black mx-80 my-10 py-5 grid justify-center'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid justify-around gap-5 grid-cols-3">

                        {/*  */}
                        <div>
                            <input className='border border-black mt-3 ps-3 py-2 rounded-sm text-sm w-60 ' {...register('email',)}
                                placeholder="Provide image link"
                                value={user?.email}
                            />

                        </div>
                        {/*  */}

                        <div>
                            <input className='border border-black mt-3 rounded-sm text-sm w-60 ps-3 py-2 ' {...register('courseBanner', { required: true })} placeholder="Provide image link" />
                            <div>
                                {errors.courseBanner && <h2 className="text-red-600 text-sm flex">image link is required.</h2>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3 ps-3 py-2 rounded-sm text-sm w-60 ' {...register('courseHours', { required: true })} placeholder="Course Hours" />
                            <div>
                                {errors.courseHours && <p className="text-red-600 text-sm flex">courseHours is required.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3  text-sm w-60 ps-3 py-2' {...register('coursePrice', { required: true })} placeholder="Course Price" />
                            <div>
                                {errors.coursePrice && <p className="text-red-600 text-sm flex">courseHours is coursePrice.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3  text-sm w-60 ps-3 py-2' {...register('courseTitle', { required: true })} placeholder="Course Title" />
                            <div>
                                {errors.courseTitle && <p className="text-red-600 text-sm flex">courseTitle is required.</p>}
                            </div>
                        </div>

                        {/* <input className='border border-black mt-3 ps-3' {...register('enrolledCount', { required: true })} placeholder="enrolled Count" />
                        {errors.lastName && <p>enrolledCount is required.</p>} */}

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('id', { required: true })} placeholder="course ID" />
                            <div>
                                {errors.id && <p className="text-red-600 text-sm flex">id is required.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('milestones', { required: true })} placeholder="Milestones" />
                            <div>
                                {errors.milestones && <p className="text-red-600 text-sm flex">milestones is required.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('modules', { required: true })} placeholder="Modules" />
                            <div>
                                {errors.modules && <p className="text-red-600 text-sm flex">modules is required.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('numberOfQuizzes', { required: true })} placeholder="Number Of Quizzes" />
                            <div>
                                {errors.numberOfQuizzes && <p className="text-red-600 text-sm flex">numberOfQuizzes is required.</p>}
                            </div>
                        </div>

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('numberOfVideos', { required: true })} placeholder="Number Of Videos" />
                            <div>
                                {errors.numberOfVideos && <p className="text-red-600 text-sm flex">numberOfVideos is required.</p>}
                            </div>
                        </div>

                        {/* <input className='border border-black mt-3 ps-3' {...register('ratings', { required: true })} placeholder="ratings" />
                        {errors.lastName && <p>ratings is required.</p>} */}

                        <div>
                            <input className='border border-black mt-3 text-sm w-60 ps-3 py-2' {...register('teacherName', { required: true })} placeholder="Teacher Name" />
                            <div>
                                {errors.teacherName && <p className="text-red-600 text-sm flex">teacherName is required.</p>}
                            </div>
                        </div>
                    </div>


                    {/* ----------- array input for feature--------*/}
                    <div className="py-2">
                        {featureFields.map((field, index) => (
                            <div key={field.id} >
                                <input className='border border-black mt-3 text-sm w-60 ps-3 py-2'
                                    type="text"
                                    {...register(`features.${index}`)}
                                    // defaultValue={field.feature}
                                    placeholder="Feature"
                                />
                                <button type="button" className="ps-2 hover:text-red-600 " onClick={() => remove(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" className="text-sm border bg-green-700 rounded-full px-2 py-1 text-white mt-2" onClick={() => append()}>
                            + Add Feature
                        </button>
                    </div>
                    {/* ----------- */}

                    {/* clear / reload button */}

                    

                    {/* submit button */}
                    <input className='btn btn-neutral mt-3 hover:bg-green-700 hover:text-white' type="submit" />
                </form>
            </div>


            <div>

                <div className="grid justify-center my-8">
                    <Link to={"/instructor"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-600 hover:bg-black hover:text-white">back to Instructor Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;