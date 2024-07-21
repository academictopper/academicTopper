// components/Footer.tsx
"use client"
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white py-8 w-screen">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-3" /> */}
              <Image src={'/logo.jpg'} alt="logo" width={80} height={80}/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Your Company</span>
            </a>
            <p className="mt-4">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">Facebook</span><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">Twitter</span><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">GitHub</span><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">YouTube</span><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Marketing</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Analytics</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Commerce</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Insights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Claim</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
