"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { useSession } from "next-auth/react";
import SignoutButton from "./Signout";
import { AdminPortal } from "./AdminPortal";
import { FeaturedComponent } from "./FeaturedComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function HeroSection() {
  const { data } = useSession();
  const [userDetails,setUserDetails]=useState<any>({})
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userData = await axios.get(
        `/api/getSingleUser/${data?.user?.email}`
      );
      console.log({ userData });
      setUserDetails(userData)
    };
    if(data?.user) fetchUserDetails();
  }, [data]);

  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Welcome to Academic Topper
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Welcome <span className="text-cyan-500">{data?.user?.name || "Students"} </span> Unlock Your Full Potential
            with Expert Guidance: Tailored Support and Strategies for Achieving
            Excellence.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore courses
              </Button>
            </Link>
            {userDetails?.data?.data?.isAdmin && <Link href={"/admin/getAllCourses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Admin dashboard
              </Button>
            </Link>}
          </div>
        </div>
      </div>
      <FeaturedComponent />
    </>
  );
}

export default HeroSection;
