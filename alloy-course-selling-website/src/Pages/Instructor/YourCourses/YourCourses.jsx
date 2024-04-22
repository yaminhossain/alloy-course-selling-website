import { useEffect, useState } from "react";

const YourCourses = () => {

    // data fetch..............
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/formCourses'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(courses?courses:"data nai");

    return (
        <div className="text-center">
            <p>YourCourses</p>
        </div>
    );
};

export default YourCourses;