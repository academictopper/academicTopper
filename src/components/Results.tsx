"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/Image";

const Results = (params: any) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const searchParams = useSearchParams();
  const board = searchParams.get("board");
  const clas = searchParams.get("class");
  const subject = searchParams.get("subject");
  const chapter = searchParams.get("chapter");
  // console.log(queryParams)

  useEffect(() => {
    // console.log("search",search);
    fetch(`/api/getAllData?board=${board}&class=${clas}&subject=${subject}&chapter=${chapter}`)
      .then((response) => response.json())
      .then((data) => setData(data.questions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;
  console.log(data)

  const handleImageClick = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageSrc('');
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-6">Important Questions</h1>
        <div className="space-y-8 w-full">
          {data.map((item:any) => (
            <div key={item._id} className="border p-6 rounded-lg bg-gray-50 shadow-lg relative">
              <h2 className="text-2xl font-semibold mb-4 text-center">{item.subject} - {item.chapter}</h2>
              <p className="text-lg text-center mb-2"><strong>Board:</strong> {item.board}</p>
              <p className="text-lg text-center mb-4"><strong>Class:</strong> {item.class}</p>
              <div className="absolute top-2 right-2">
                {item.pdfile && (
                  <a
                    href={item.pdfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View PDF
                  </a>
                )}
              </div>
              <h3 className="text-xl font-medium mt-4 mb-2">Questions:</h3>
              <ul className="space-y-4">
                {item.questionArray.map((questionItem:any) => (
                  <li key={questionItem._id} className="border p-4 rounded-lg bg-white shadow-md flex">
                    <div className="flex-1">
                      <p className="text-lg mb-2"><strong>Question:</strong> {questionItem.question}</p>
                      <p className="text-lg mb-2"><strong>Answer:</strong> {questionItem.answer}</p>
                    </div>
                    {questionItem.image && (
                      <div className="ml-4 flex-shrink-0">
                        <img
                          src={questionItem.image}
                          alt="Question Image"
                          className="w-40 h-36 object-contain rounded-lg shadow-md cursor-pointer"
                          onClick={() => handleImageClick(questionItem.image)}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal} imageSrc={modalImageSrc} />
    </div>
    
  );
};

export default Results;
