import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth()

  console.log(session);

  if (session) {
    redirect("/add-tip")
  }
  
  return (
    <main className="min-h-dvh flex items-center justify-center bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover rounded-xl bg-fixed p-3 md:p-10 space-y-5 mt-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-5">
      <h1 className="text-center font-bold md:text-3xl text-xl text-gray-700">
        Sign in to your account
      </h1>
      <div className="flex items-center justify-center">
        <div className="space-y-10 max-md:w-full md:w-xl">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit" className="border border-gray-300 flex items-center justify-center gap-2 text-gray-700 py-2 px-4 rounded-md text-lg hover:bg-gray-50 transition-all w-full cursor-pointer">
              <FcGoogle className="w-6 h-6" />
              <p>Sign In with Google</p>
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
          <button className="border border-gray-300 flex items-center justify-center gap-2 text-gray-700 py-2 px-4 rounded-md text-lg hover:bg-gray-50 transition-all w-full cursor-pointer">
             <FaGithub className="w-6 h-6" />
            <p>Sign In with Github</p>
          </button>
          </form>
          <button className="border border-gray-300 flex items-center justify-center gap-2 text-gray-700 py-2 px-4 rounded-md text-lg hover:bg-gray-50 transition-all w-full cursor-pointer">
            <FaFacebookF className="bg-blue-500 text-white rounded-full w-6 h-6 " />
            <p>Sign In with Facebook</p>
          </button>
        </div>
      </div>
      <p className="text-center text-gray-700 mt-5">
        By signing in to our website, you agree to our{" "}
        <span className="underline">Privacy Policy</span>, and{" "}
        <span className="underline">Terms of Use</span>.
      </p>
      </div>
    </main>
  );
};

export default page;
