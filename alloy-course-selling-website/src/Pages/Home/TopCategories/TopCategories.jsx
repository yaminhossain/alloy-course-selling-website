import image1 from "../../../../public/images/homepage images/Business.png";
const TopCategories = () => {
    return (
        <div className=" my-14 mx-40">
            <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-56  mx-auto ">TopCategories</h2>
            <div className="grid grid-cols-4 gap-y-6">
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>               
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={image1} alt="" />
                    <h2 className="text-center">Design</h2>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;