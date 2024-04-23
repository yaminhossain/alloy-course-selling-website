import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {

    const user = useContext(AuthContext);
    console.log(user)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="" onClick={toggleMenu}>
                <img className=" rounded-full h-10" src={user.photoURL} alt="user" />
            </button>
            {isOpen && (
                <div className="absolute top-12 right-2 bg-white border border-gray-300 rounded-md shadow-md w-20">
                    <ul className='p-2'>
                        
                        <Link to={"/login"}><li>Log in</li></Link>
                        <Link><li>Log out</li></Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
