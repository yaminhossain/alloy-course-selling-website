const RequestedCourse = (item) => {
    console.log(item);
    console.log(item.item.question);
    return (
        <div className='w-full bg-slate-50 my-4 rounded-md p-5'>
            <h1 className="text-xl mb-4">{item.item.question} </h1>
            <p className="text-sm text-gray-600 mb-4">By: {item.item.postedBy}</p>
            <p className="text-justify">{item.item.questionDescription}</p>
            
        </div>
    );
};

export default RequestedCourse;