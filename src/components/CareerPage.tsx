// pages/career.js

import React from 'react';
import { Spotlight } from './ui/Spotlight';

const CareerPage = () => {
  const jobListings = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'Looking for a talented frontend developer with experience in React.js and Next.js.',
      applyLink: '#',
    },
    {
      title: 'Backend Developer',
      location: 'Remote',
      description: 'Seeking a backend developer proficient in Node.js and MongoDB.',
      applyLink: '#',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      description: 'Creative UI/UX designer with a strong portfolio in web design.',
      applyLink: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white p-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
        <p className="text-lg text-center mb-12">
          At Academic Topper, we are always looking for passionate individuals to join our team.
          Explore our current openings below and be a part of our journey.
        </p>

        <div className="space-y-8">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{job.location}</p>
              <p className="mb-4">{job.description}</p>
              <a
                href={job.applyLink}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
