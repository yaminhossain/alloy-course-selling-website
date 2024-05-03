const RequestedCourse = (item) => {
    console.log(item);
    return (
        <div className='w-full bg-slate-50 my-4 rounded-md p-5'>
            <p className="text-sm text-gray-600 mb-4">By: {item.item.name}</p>
            
            <h1 className="text-xl mb-4"><span className="font-black">Course Title:</span><span >{" "+item.item.courseTitle}</span> </h1>
            <p className="text-justify">{item.item.questionDescription}</p>

        </div>
    );
};

export default RequestedCourse;