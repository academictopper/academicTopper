"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spotlight } from "./ui/Spotlight";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/Image";

const Results = (params: any) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const board = searchParams.get("board");
  const clas = searchParams.get("class");
  const subject = searchParams.get("subject");
  const chapter = searchParams.get("chapter");
  const showPdf = searchParams.get("showPdf");

  useEffect(() => {
    fetch(
      `/api/getAllData?board=${board}&class=${clas}&subject=${subject}&chapter=${chapter}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.questions);
        setFilteredData(data.questions);
        if (showPdf === "true" && data.questions.length > 0) {
          setShouldRedirect(true);
          window.location.href = data.questions[0].pdfile;
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const results = data.filter((item: any) =>
      item.questionArray.some(
        (questionItem: any) =>
          questionItem.question
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          questionItem.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(results);
  }, [searchQuery, data]);

  const handleImageClick = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

 const handleDownload = async (pdfUrl:any) => {
  try {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf'); // Use the actual file name if needed
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url); // Clean up
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};

  // Function to highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="bg-yellow-300">$1</span>');
  };

  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] p-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full max-w-7xl bg-gray-400 shadow-md rounded-lg p-6 flex flex-col items-center mt-8 md:mt-32">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
          Important Questions
        </h1>
        <input
          type="text"
          placeholder="Search questions or answers"
          className="mb-6 p-2 w-full max-w-md rounded-lg border border-gray-300 text-sm md:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="space-y-8 w-full">
          {filteredData.length > 0 ? (
            filteredData.map((item: any) => (
              <div
                key={item._id}
                className="border p-6 rounded-lg bg-gray-400 shadow-lg relative"
              >
                <h2 className="text-lg md:text-2xl font-semibold mb-4 text-center">
                  {item.subject} - {item.chapter}
                </h2>
                <p className="text-base md:text-lg text-center mb-2">
                  <strong>Board:</strong> {item.board}
                </p>
                <p className="text-base md:text-lg text-center mb-4">
                  <strong>Class:</strong> {item.class}
                </p>
                <div className="absolute top-2 right-2">
                  {item.pdfile && (
                    <a
                      href={item.pdfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg text-indigo-600 hover:text-indigo-800 font-medium hidden md:block"
                    >
                      View PDF
                    </a>
                  )}
                  {item.pdfile && (
  <button
    onClick={() => handleDownload(item.pdfile)}
    className="text-sm md:text-lg text-indigo-600 hover:text-indigo-800 font-medium sm:hidden"
  >
    Download PDF
  </button>
)}
                </div>
                <h3 className="text-base md:text-xl font-medium mt-4 mb-2">
                  Questions:
                </h3>
                <ul className="space-y-4">
                  {item.questionArray.map(
                    (questionItem: any) =>
                      (questionItem.question
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                        questionItem.answer
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())) && (
                        <li
                          key={questionItem._id}
                          className="border p-4 rounded-lg bg-white shadow-md flex flex-col md:flex-row md:items-start"
                        >
                          <div className="flex-1">
                            <p
                              className="text-sm md:text-lg mb-2"
                              dangerouslySetInnerHTML={{
                                __html: `<strong>Question:</strong> ${highlightText(
                                  questionItem.question,
                                  searchQuery
                                )}`,
                              }}
                            />
                            <p
                              className="text-sm md:text-lg mb-2"
                              dangerouslySetInnerHTML={{
                                __html: `<strong>Answer:</strong> ${highlightText(
                                  questionItem.answer,
                                  searchQuery
                                )}`,
                              }}
                            />
                          </div>
                          {questionItem.image && (
                            <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                              <img
                                src={questionItem.image}
                                alt="Question Image"
                                className="w-32 h-32 md:w-40 md:h-36 object-contain rounded-lg shadow-md cursor-pointer"
                                onClick={() =>
                                  handleImageClick(questionItem.image)
                                }
                              />
                            </div>
                          )}
                        </li>
                      )
                  )}
                </ul>
              </div>
            ))
          ) : (
            <div className="text-center text-lg md:text-xl font-semibold">
              We are adding data, it will come soon.
            </div>
          )}
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={modalImageSrc}
      />
    </div>
  );
};

export default Results;
