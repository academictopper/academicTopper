"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white py-8 w-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:space-x-8 ">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image src={"/logo.jpg"} alt="logo" width={80} height={80} />
              <span className="self-center text-2xl font-bold text-white ml-3">
                Academic Topper
              </span>
            </a>
            <p className="mt-4 text-gray-400">
              Improving the world through better education.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-500 hover:text-cyan-500" target="_blank">
                <span className="sr-only">Facebook</span>
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/academictopper?igsh=MWFueTBiODJiMHJ6Yw=="
                className="text-gray-500 hover:text-cyan-500"
                target="_blank"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/academicTopper" className="text-gray-500 hover:text-cyan-500" target="_blank">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={20} />
              </a>
              <a
                href="https://github.com/academictopper/academicTopper"
                className="text-gray-500 hover:text-cyan-500"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub size={20} />
              </a>
              <a
                href="https://youtube.com/@academictopper?si=PkijpG9SHUkCEYV6"
                className="text-gray-500 hover:text-cyan-500"
                target="_blank"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div className="md:flex md:justify-between md:gap-14">
            <div className="min-[320px]:mb-6">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/aboutUs"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ourTeam"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-[320px]:mb-6">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/claimPolicy"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Claim
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookiePolicy"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Cookie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacyPolicy"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-base text-gray-500 hover:text-cyan-500"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" md:block mr-10">
              <h2 className="text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-400 mb-4">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-gray-300 p-2 flex-1 rounded-l"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2024 Academic Topper, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

