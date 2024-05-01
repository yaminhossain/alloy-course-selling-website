

const Post = ({post}) => {
    console.log("post",post)
    return (
        <div>
            <div className="w-full bg-slate-200 p-8 my-5 rounded-md text-justify">
                <h1 className="text-xl mb-3">{post.question}</h1>
                <p className="mb-3 text-sm text-gray-600">{ post.postedBy }</p>
                <p >{post.questionDescription}</p>

            </div>
            
        </div>
    );
};

export default Post;