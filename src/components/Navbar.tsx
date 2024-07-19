"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import SignoutButton from "./Signout";
import { useSession } from "next-auth/react";
import Image from "next/image";


function Navbar({ className }: { className?: string }) {
  const { data } = useSession();
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: string) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <div className={cn("bg-black z-50 w-full", className)}>
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        <Link href="/" passHref>
          <Image src={'/logo.jpg'} alt="logo" width={80} height={80}/>
        </Link>
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {!isOpen?<span style={{ fontSize: '24px' }}>☰</span>:<span style={{ fontSize: '24px' }}>X</span>}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" passHref>
            <span
              onClick={() => handleMenuItemClick("Home")}
              className={cn(
                "text-white cursor-pointer",
                active === "Home" ? "font-bold" : "font-normal"
              )}
            >
              Home
            </span>
          </Link>
          <Link href="/allCourses" passHref>
            <span
              onClick={() => handleMenuItemClick("All Courses")}
              className={cn(
                "text-white cursor-pointer",
                active === "All Courses" ? "font-bold" : "font-normal"
              )}
            >
              All Courses
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              onClick={() => handleMenuItemClick("Contact Us")}
              className={cn(
                "text-white cursor-pointer",
                active === "Contact Us" ? "font-bold" : "font-normal"
              )}
            >
              Contact Us
            </span>
          </Link>
          {data?.user ? (
            <div className="flex items-center">
              <SignoutButton />
              <Link href="/profile" passHref>
                <img
                  src={data.user.image || ''}
                  alt="User Image"
                  className="w-8 h-8 rounded-full ml-4 cursor-pointer mb-4"
                />
              </Link>
            </div>
          ) : (
            <Link href="/login" passHref>
              <span
                onClick={() => handleMenuItemClick("Login")}
                className={cn(
                  "text-white cursor-pointer",
                  active === "Login" ? "font-bold" : "font-normal"
                )}
              >
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" passHref>
            <span
              onClick={() => handleMenuItemClick("Home")}
              className={cn(
                "block px-4 py-2 text-white",
                active === "Home" ? "font-bold" : "font-normal"
              )}
            >
              Home
            </span>
          </Link>
          <Link href="/allCourses" passHref>
            <span
              onClick={() => handleMenuItemClick("All Courses")}
              className={cn(
                "block px-4 py-2 text-white",
                active === "All Courses" ? "font-bold" : "font-normal"
              )}
            >
              All Courses
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              onClick={() => handleMenuItemClick("Contact Us")}
              className={cn(
                "block px-4 py-2 text-white",
                active === "Contact Us" ? "font-bold" : "font-normal"
              )}
            >
              Contact Us
            </span>
          </Link>
          {data?.user ? (
            <div className="block px-4 py-2 text-white">
              <SignoutButton />
              <Link href="/profile" passHref>
                <img
                  src={data.user.image || ''}
                  alt="User Image"
                  className="w-8 h-8 rounded-full mt-2 cursor-pointer"
                />
              </Link>
            </div>
          ) : (
            <Link href="/login" passHref>
              <span
                onClick={() => handleMenuItemClick("Login")}
                className={cn(
                  "block px-4 py-2 text-white",
                  active === "Login" ? "font-bold" : "font-normal"
                )}
              >
                Login
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
