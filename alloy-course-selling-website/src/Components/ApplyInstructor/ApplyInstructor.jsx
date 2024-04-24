import { Link } from "react-router-dom";

const ApplyInstructor = () => {
    return (
        <div>
            <div className="flex justify-center my-10">
                <Link to={"/instructor"}><button className="border p-5">Apply Now</button></Link>
            </div>
        </div>
    );
};

export default ApplyInstructor;