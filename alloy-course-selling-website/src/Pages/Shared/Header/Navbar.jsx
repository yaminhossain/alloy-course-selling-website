import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-yellow-400 h-10 mx-10 text-center ">
            <div className="flex justify-between mx-5">
                <Link to="/"><h2>Home</h2></Link>
                <Link to="page1"><h2>Page 1</h2></Link>
                <Link to="page2"><h2>Page 2</h2></Link>
                <Link to="login"><h2>Log In</h2></Link>
                {/* <Link to="signUp"><h2>Page 2</h2></Link> */}
                
            </div>
        </div>
    );
};

export default Navbar;