
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const Page1 = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('formCourses', {
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
            <h2 className="text-5xl text-center">1</h2>

            <form className='border border-black px-80 py-20 m-20 grid'
                onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-black mt-3' {...register('firstName')} />
                <input className='border border-black mt-3' {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input className='border border-black mt-3' {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input className='btn btn-neutral mt-3' type="submit" />
            </form>
        </div>
    );
};

export default Page1;