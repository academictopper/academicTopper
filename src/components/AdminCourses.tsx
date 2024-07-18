"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminCourses = () => {

  const questionsData = [
    {
      _id: "667fc820933dc0d16ec6257c",
      board: "CBSE",
      class: "10",
      subject: "Mathematics",
      chapter: "Trigonometry",
      questionArray: [
        {
          question: "What is the value of sin 90°?",
          answer: "1",
          image: "https://example.com/image1.png",
          // _id: "667fc820933dc0d16ec6257d"
        },
        {
          question: "What is the value of cos 0°?",
          answer: "1",
          // _id: "667fc820933dc0d16ec6257e"
        }
      ],
      pdfile: "https://example.com/somefile.pdf",
      __v: 0
    },
  ];

  const [data, setData] = useState(questionsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
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
  useEffect(() => {
   

    fetchData();
  }, []);
    const deleteData = async (id:string) => {
      try {
        // const response = await fetch(`/api/deleteCourse/${id}`);
        // const result = await response.json();
        // console.log("entered",result.data);
        await axios.delete(`/api/deleteCourse/${id}`)
        await fetchData()
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };



  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Error: {error}
      </div>
    );
  }

  const handleEdit = (item: any) => {
    router.push(`/admin/editQuestions/${item._id}`);
  };

  // useEffect(() => {
  //   console.log("data:", data); 
  // }, [data]);

  return (
    <div className="max-w-4xl mx-auto  p-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-32">
      <button
              onClick={() => router.push('/admin/addQuestions')}
              className="ml-4 justify-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Add Courses
            </button>
      {data.map((item) => (
        <div key={item._id} className="bg-gray-400 m-2 shadow-md rounded-lg p-6 mb-6t ">
          <h1 className="text-2xl font-bold mb-4">
            {item.subject} - {item.chapter}
          </h1>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Board:</strong> {item.board}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Class:</strong> {item.class}
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => handleEdit(item)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => deleteData(item._id)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AdminCourses;
