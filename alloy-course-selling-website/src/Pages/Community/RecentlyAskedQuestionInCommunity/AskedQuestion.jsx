const AskedQuestion = ({ post }) => {
  console.log(post);
  return (
    <div>
      <div className="collapse  my-4  bg-slate-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          {post.question}
        </div>
        <div className="collapse-content">
          <p>{post.questionDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
