'use client'
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import { useEffect, useState } from "react";

interface Course{
    _id: number,
    board: string,
    class: string,
    subject: string,
    chapter: string,
    isFeatured: boolean,
        
}
export function AllCourses() {
    // const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/getAllData");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setData(result.questions);
          setLoading(false);
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
          // setError(error.toString());
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
  

  return (
    <div className="py-12 bg-gray-900 ">
        <div>
            <div className="text-center  mt-20">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">ALL COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {data.map((course:Course)=> (
                    <div key={course._id} className="flex justify-center ">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] min-w-[300px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Board: {course.board}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Subject: {course.subject}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Chapter: {course.chapter}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Class: {course.class}</p>

                                <Link href={`/results/?board=${course.board}&class=${course.class}&subject=${course.subject}&chapter=${course.chapter}`} className="text-white
                                
                                ">
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                 ))} 
            </div>
        </div>
       
    </div>
  )
}
