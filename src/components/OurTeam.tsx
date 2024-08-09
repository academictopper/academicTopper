// pages/team.js
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";

const teamMembers = [
  {
    name: "Arvind Mali",
    position: "CEO & Founder",
    imageSrc: "/arvind1.jpg",
    description: "Arvind is the visionary behind AcademicTopper. With a passion for education and technology, he leads the team with a focus on innovation and student success.",
  },
  {
    name: "Anshu Kumar",
    position: "COO & Co-Founder",
    imageSrc: "/anshu1.jpg",
    description: "As COO and Co-Founder, Anshu drives our operational excellence, playing a pivotal role in scaling Academic Topper and delivering top-notch educational experiences worldwide.",
  },
  {
    name: "Rishabh Jha",
    position: "Chief Technology Officer",
    imageSrc: "/rishab1.jpeg",
    description: "Rishabh is the tech guru of the team, responsible for overseeing the development and maintenance of our platform. He ensures that our technology stays ahead of the curve.",
  },
  // {
  //   name: "David Kim",
  //   position: "Lead Designer",
  //   imageSrc: "/images/david.jpg",
  //   description: "David is the creative mind behind our platform's design. His expertise in UX/UI ensures that our platform is not only functional but also visually appealing.",
  // },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white py-12 px-6">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-500">
          Our Team
        </h1>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* <img
                src={member.imageSrc}
                alt={member.name}
                className="w-64 h-64 mx-auto rounded-full mb-4 border-4 border-indigo-500"
              /> */}
              <Image
              src={member.imageSrc}
              alt={`${member.name} picture`}
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-indigo-500 mb-4"
              objectFit="cover"
              // placeholder="blur" // Optional: If you have a blur placeholder
            />
              <h2 className="text-2xl font-asemibold text-indigo-400">
                {member.name}
              </h2>
              <p className="text-indigo-300">{member.position}</p>
              <p className="text-gray-300 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
