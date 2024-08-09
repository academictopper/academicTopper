"use client"
import React from 'react';
import { Spotlight } from './ui/Spotlight';

const ContactUs: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white overflow-hiddens">
      <div className="md:w-1/2 p-8 flex flex-col justify-center  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="mb-4">
          We strive to improve education by providing personalized assistance to learners facing challenges with specific concepts or questions. 
        </p>
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <span className="material-icons">location_on</span>
            <span className="ml-2">New Delhi, Delhi, India</span>
          </div>
          {/* <div className="flex items-center mb-2">
            <span className="material-icons">phone</span>
            <span className="ml-2">+1 (555) 234-5678</span>
          </div> */}
          <div className="flex items-center">
            <span className="material-icons">email</span>
            <span className="ml-2">academictopper7@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-8 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none mt-4 md:mt-0"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none h-32"
          ></textarea>
          <button className="w-full p-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
            Send message
          </button>
        </form>
      </div>
    </div>
    <div className='w-5 h- bg-black'></div>
    </div>
  );
};

export default ContactUs;
