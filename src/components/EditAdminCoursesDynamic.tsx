"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export function EditAdminCoursesDynamic(params : any) {

  const [formState, setFormState] = useState({
    _id:"",
    board: "",
    class: "",
    subject: "",
    chapter: "",
    pdfile: "",
    questionArray: [{ question: "", answer: "", image: "" }],
  });

  // http://localhost:3000/api/getSingleCourseDetails/667fc698933dc0d16ec62573

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/getSingleCourseDetails/${params.params.id}`);
          const result = await response.json();
          setFormState(result.data);
          console.log("entered",result.data);
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      };
  
      fetchData();
    }, []);

  

  const saveImage = async (selectedImage: any, index: number) => {
    const data = new FormData();
    // console.log(selectedImage, "myImage");
    data.append("file", selectedImage);
    data.append("upload_preset", "agfsshqj");
    data.append("cloud_name", "daxn1vtwk");

    try {
      // if (selectedImage === null) {
      //   return toast.error("Please Upload image");
      // }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/daxn1vtwk/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();
      const updatedQuestionsFile = formState.questionArray.map((item, i) =>
        i === index ? { ...item, image: cloudData.url } : item
      );
      setFormState({
        ...formState,
        questionArray: updatedQuestionsFile,
      });
      // setImageUrl(cloudData.url);
    } catch (error) {}
  };

  const savePdf = async (selectedPdf: any, name: any) => {
    const d = new FormData();
    // console.log("savePdf", selectedPdf);
    d.append("file", selectedPdf);
    d.append("upload_preset", "agfsshqj");
    d.append("cloud_name", "daxn1vtwk");

    try {
      // if (selectedImage === null) {
      //   return toast.error("Please Upload image");
      // }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/daxn1vtwk/image/upload",
        {
          method: "POST",
          body: d,
        }
      );

      const cloudData = await res.json();
      setFormState({
        ...formState,
        [name]: cloudData.url,
      });
      // setPdfUrl(cloudData.url);
    } catch (error) {}
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFileChange = async (e: { target: { name: any; files: any } }) => {
    const { name, files } = e.target;
    console.log(name);
    const selectedPdf = e.target.files[0];
    // console.log(selectedPdf)
    if (selectedPdf) {
      await savePdf(selectedPdf, name);
      // location.reload();
    }
    // console.log(selectedPdf);
    // setPdf(selectedPdf);
  };

  const handleQuestionChange = (
    index: number,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedQuestions = formState.questionArray.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setFormState({
      ...formState,
      questionArray: updatedQuestions,
    });
  };

  const handleQuestionFileChange = async (
    index: number,
    e: { target: { name: any; files: any } }
  ) => {
    console.log(e);
    const { name, files } = e.target;
    console.log("destructured", name, files);
    const selectedImage = e.target.files[0];
    console.log(selectedImage, "selected Image");
    if (selectedImage) {
      console.log(index);
      await saveImage(selectedImage, index);
      // location.reload();
    }
    console.log(selectedImage);
    // setImageUrl(selectedImage);
  };

  const addQuestion = () => {
    setFormState({
      ...formState,
      questionArray: [
        ...formState.questionArray,
        { question: "", answer: "", image: "" },
      ],
    });
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = formState.questionArray.filter(
      (_, i) => i !== index
    );
    setFormState({
      ...formState,
      questionArray: updatedQuestions,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      console.log({formState});
      const response = await axios.patch('/api/updateData', {
        id:formState._id,
        ...formState,
      });
  
      console.log("Success:", response.data);
      setFormState({
        _id:"",
        board: "",
        class: "",
        subject: "",
        chapter: "",
        pdfile: "",
        questionArray: [{ question: "", answer: "", image: "" }],
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="w-full lg:bg-[#090c31] flex justify-center items-center lg:h-auto">
        <main className="bg-white w-full h-full lg:h-[95%] lg:w-[70%] p-12 my-6 lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-none">
          <h2 className="flex uppercase justify-center font-bold text-xl pt-10 pb-3 border-b-2 border-b-orange-700 lg:text-2xl lg:justify-start">
            Admin Edit Portal ID : {params.params.id}
          </h2>
          <form
            className="m-2 flex flex-col items-center justify-center lg:m-20"
            onSubmit={handleSubmit}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="board"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Board
                    </label>
                    <div className="mt-2">
                      <select
                        id="board"
                        name="board"
                        autoComplete="board-name"
                        value={formState.board}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option>Select</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="RBSE">RBSE</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Class
                    </label>
                    <div className="mt-2">
                      <select
                        id="class"
                        name="class"
                        autoComplete="class-name"
                        value={formState.class}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option>Select</option>
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <select
                        id="subject"
                        name="subject"
                        autoComplete="subject-name"
                        value={formState.subject}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option>Select</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="chapter"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Chapter
                    </label>
                    <div className="mt-2">
                      <select
                        name="chapter"
                        id="chapter"
                        autoComplete="chapter-name"
                        value={formState.chapter}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      >
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9 </option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label>PDF File : </label>
                <input type="file" name="pdfile" onChange={handleFileChange} />
              </div>

              {formState.questionArray.map((item, index) => (
                <div key={index} className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="question"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Question
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="question"
                          name="question"
                          placeholder="Question"
                          value={item.question}
                          onChange={(e) => handleQuestionChange(index, e)}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="answer"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Answer
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="answer"
                          name="answer"
                          placeholder="Answer"
                          value={item.answer}
                          onChange={(e) => handleQuestionChange(index, e)}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* <div className="col-span-full">
                      <label
                        htmlFor="upload-image"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Upload Image
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="image"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="image"
                                name="image"
                                // value={item.image}
                                onChange={(e) =>
                                  handleQuestionFileChange(index, e)
                                }
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-span-full">
                      <div className="mt-2">
                        <label>Image : </label>
                        <input
                          type="file"
                          name="image"
                          onChange={(e) => handleQuestionFileChange(index, e)}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeQuestion(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addQuestion}>
                Add Question
              </button>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              {/* <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button> */}
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
