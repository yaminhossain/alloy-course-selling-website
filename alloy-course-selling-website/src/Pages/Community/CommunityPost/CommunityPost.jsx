import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const CommunityPost = ({ formData }) => {
  const user = useContext(AuthContext);
  // data fetch..............
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-11-serve-site-kdls-ms7xe0kt1-anik12136s-projects.vercel.app/communityPost"
        ); // Specify the path to your JSON file in the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(fetchData);

  return (
    <div>
      <div className="flex mt-9 justify-center items-center border h-full  max-w-[600px] bg-slate-50 rounded-md">
        <div className="max-w-[500px]">
          <h1 className="text-2xl mb-2">{formData?.questionTitle}</h1>

          <h1 className="text-gray-500 text-sm mb-5">{user?.displayName}</h1>

          <p>{formData?.questionDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
