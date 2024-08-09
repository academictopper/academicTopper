import React from 'react';
import { Spotlight } from './ui/Spotlight';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] p-8">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-500">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          Welcome to Academic Topper! We are dedicated to providing high-quality
          educational resources and tools to help students excel in their
          studies. Our mission is to empower students by offering a platform
          where they can access comprehensive study materials, practice
          questions, and expert guidance.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          Our mission is to create a world where every student has access to the
          resources they need to succeed academically. We believe in the power
          of education and strive to make learning accessible, engaging, and
          effective for everyone.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
          Our Vision
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          We envision a future where students from all backgrounds can achieve
          their academic goals. By harnessing the power of technology, we aim to
          bridge educational gaps and provide equal learning opportunities for
          all.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
          Our Team
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          Our team is composed of passionate educators, developers, and
          designers who are committed to creating the best possible learning
          experience for students. We work tirelessly to ensure that our
          platform is user-friendly, up-to-date, and packed with valuable
          content.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
          Contact Us
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          If you have any questions, suggestions, or feedback, we&apos;d love to hear
          from you! Feel free to reach out to us at
          <a
            href="mailto:academictopper7@gmail.com"
            className="text-indigo-500 underline ml-2"
          >
            academictopper7@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
