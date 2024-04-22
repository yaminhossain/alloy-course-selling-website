import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
const AddCourse = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
        <div>
            <h2 className="text-5xl text-center">Add your course</h2>

            {/* add course form */}
            <form className='border border-black px-80 py-20 m-20 grid'
                onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-black mt-3' {...register('firstName')} />
                <input className='border border-black mt-3' {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input className='border border-black mt-3' {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input className='btn btn-neutral mt-3' type="submit" />
            </form>

            <div>
                
                <div className="grid justify-center my-8">
                    <Link to={"/instructor"}><button className="text-center border px-3 py-2 border-zinc-950 bg-green-300 hover:bg-black hover:text-white">back to Instructor Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;