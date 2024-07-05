"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router, { useRouter } from "next/navigation";
export default function SignInOne() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
    checkLogin();
  },[session]);

  const checkLogin =()=>{
    (session?.user===undefined)?"":`${router.push('/')}`;
  }

  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <section className="flex items-center justify-center min-h-screen bg-black">
    <div className="space-y-3 p-12">
      <button
        type="button"
        className="relative inline-flex items-center justify-center w-full max-w-xs px-5 py-3 text-lg font-semibold text-gray-700 bg-white border border-gray-400 rounded-md transition duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        onClick={googleLogin}
      >
        <Image
          src="/google_icon.png"
          height={30}
          width={30}
          alt="Google Icon"
          className="mr-3"
        />
        Sign in with Google
      </button>
    </div>
  </section>
  );
}
