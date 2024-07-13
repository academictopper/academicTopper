"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import SignoutButton from "./Signout";
import { useSession } from "next-auth/react";

function Navbar({ className }: { className?: string }) {
  const { data } = useSession();

  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
       |<Link href={"/allCourses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="All Courses"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
       
        {data?.user && (
          <div className="flex items-center">
            <SignoutButton />

            {data.user.image ? (
          <Link href={"/profile"}>

              <img
                src={data.user.image}
                alt="User Image"
                className="w-8 h-8 rounded-full ml-4"
              />
              </Link>
            ) : (
              <img
                src="/default-avatar.png" // replace with your default avatar path
                alt="Default Avatar"
                className="w-8 h-8 rounded-full ml-4"
              />
            )}
          </div>
        )}
        {!data?.user && (
          <Link href={"/login"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Login"
            ></MenuItem>
          </Link>
        )}
      </Menu>

      
    </div>
  );
}

export default Navbar;
