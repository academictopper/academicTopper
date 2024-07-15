"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { useRouter } from 'next/navigation';

const ExploreCourses = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    board: '',
    class: '',
    subject: '',
    chapter: '',
    showPdf: 'No',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const { board, class: classValue, subject, chapter } = formData;
    if (board && classValue && subject && chapter) {
      setIsFormComplete(true);
      setErrorMessage('');
    } else {
      setIsFormComplete(false);
      setErrorMessage('Please fill out all fields.');
    }
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete) {
      const queryParams = new URLSearchParams({
        board: formData.board,
        class: formData.class,
        subject: formData.subject,
        chapter: formData.chapter,
      });

      if (formData.showPdf === 'Yes') {
        queryParams.append('showPdf', 'true');
      }

      router.push(`/results?${queryParams.toString()}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] p-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl w-full bg-gray-400 shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Explore Courses</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="board"
                className="block text-sm font-medium text-gray-700"
              >
                Board
              </label>
              <div className="mt-2">
                <select
                  id="board"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  autoComplete="board-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                >
                  <option>Select</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="RBSE">RBSE</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700"
              >
                Class
              </label>
              <div className="mt-2">
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  autoComplete="class-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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

            <div className="sm:col-span-1">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <div className="mt-2">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  autoComplete="subject-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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

            <div className="sm:col-span-1">
              <label
                htmlFor="chapter"
                className="block text-sm font-medium text-gray-700"
              >
                Chapter
              </label>
              <div className="mt-2">
                <select
                  name="chapter"
                  id="chapter"
                  value={formData.chapter}
                  onChange={handleChange}
                  autoComplete="chapter-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="showPdf"
                className="block text-sm font-medium text-gray-700"
              >
                Show only PDF
              </label>
              <div className="mt-2">
                <select
                  name="showPdf"
                  id="showPdf"
                  value={formData.showPdf}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
          </div>
          {errorMessage && (
            <div className="mt-4 text-center text-red-500">
              {errorMessage}
            </div>
          )}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                isFormComplete
                  ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  : 'text-gray-500 bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!isFormComplete}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExploreCourses;
