// components/Footer.tsx
"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
              <Image src={"/logo.jpg"} alt="logo" width={80} height={80} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Academic Topper
              </span>
            </a>
            <p className="mt-4">
              Improving the world through better education.
            </p>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-gray-500 hover:text-cyan-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/academictopper?igsh=MWFueTBiODJiMHJ6Yw=="
                className="text-gray-500 hover:text-cyan-500"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-500">
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </a>
              <a
                href="https://youtube.com/@academictopper?si=PkijpG9SHUkCEYV6"
                className="text-gray-500 hover:text-cyan-500"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Claim
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2024 Academic Topper, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
