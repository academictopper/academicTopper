"use client"
import React from "react";
import { useSession } from "next-auth/react";
import { Spotlight } from "./ui/Spotlight";

function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="bg-black/[0.96] h-[100vh] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p className="text-lg">
          <strong>Name:</strong> {session?.user?.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {session?.user?.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
