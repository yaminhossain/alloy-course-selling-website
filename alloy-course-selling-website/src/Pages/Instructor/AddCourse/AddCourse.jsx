import { Link } from "react-router-dom";
import { useForm, useFieldArray } from 'react-hook-form';
import Swal from 'sweetalert2';
const AddCourse = () => {

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

    const onSubmit = async (data) => {
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
            } else {
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
                <form className='border border-black mx-auto grid justify-center'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center gap-5">
                        <input className='border border-black mt-3 ps-3 py-2 rounded-sm ' {...register('courseBanner', { required: true })} placeholder="Feature" />
                        <input className='border border-black mt-3 ps-3' {...register('courseHours', { required: true })} placeholder="courseHours" />
                        {errors.lastName && <p>courseHours is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('coursePrice', { required: true })} placeholder="coursePrice" />
                     
                        {errors.age && <p>courseHours is coursePrice.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('courseTitle', { required: true })} placeholder="courseTitle" />
                        {errors.lastName && <p>courseTitle is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('enrolledCount', { required: true })} placeholder="enrolledCount" />
                        {errors.lastName && <p>enrolledCount is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('id', { required: true })} placeholder="id" />
                        {errors.lastName && <p>id is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('milestones', { required: true })} placeholder="milestones" />
                        {errors.lastName && <p>milestones is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('modules', { required: true })} placeholder="modules" />
                        {errors.lastName && <p>modules is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('numberOfQuizzes', { required: true })} placeholder="numberOfQuizzes" />
                        {errors.lastName && <p>numberOfQuizzes is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('numberOfVideos', { required: true })} placeholder="numberOfVideos" />
                        {errors.lastName && <p>numberOfVideos is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('ratings', { required: true })} placeholder="ratings" />
                        {errors.lastName && <p>ratings is required.</p>}
                        <input className='border border-black mt-3 ps-3' {...register('teacherName', { required: true })} placeholder="teacherName" />
                        {errors.lastName && <p>teacherName is required.</p>}
                    </div>


                    {/* ----------- array input for feature--------*/}
                    <div className="py-2">
                        {featureFields.map((field, index) => (
                            <div key={field.id} >
                                <input className='border border-black mt-3'
                                    type="text"
                                    {...register(`features.${index}`)}
                                    // defaultValue={field.feature}
                                    placeholder="Feature"
                                />
                                <button type="button" onClick={() => remove(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => append()}>
                            Add Feature
                        </button>
                    </div>
                    {/* ----------- */}

                    {/* submit button */}
                    <input className='btn btn-neutral mt-3' type="submit" />
                </form>
            </div>
            <div>
                <img src="" alt="" />
            </div>

            <div>

                <div className="grid justify-center my-8">
                    <Link to={"/instructor"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">back to Instructor Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;