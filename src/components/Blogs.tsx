"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Complex Topics Easily",
    description: "Tips and tricks to break down complex topics into manageable parts.",
    date: "July 15, 2024",
    author: "Anshu Kumar",
    link: "/blog/understanding-complex-topics",
  },
  {
    id: 2,
    title: "How to Excel in Online Learning",
    description: "A guide to help you get the most out of your online courses.",
    date: "July 10, 2024",
    author: "Arvind Mali",
    link: "/blog/excel-online-learning",
  },
  // Add more blog posts here
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white py-8 px-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">
                {post.description}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span>{post.date}</span> | <span>{post.author}</span>
              </div>
              <Link href={post.link}>
                <Link href="/blogs" className="text-blue-500 hover:underline hover:text-white">
                  Read More &rarr;
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
