"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] mt-50 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form>
        {/* <input
          type="text"
          placeholder="Enter your username"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center"
        /> */}
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center mt-4"
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded p-2 w-full max-w-md mt-4 hover:bg-green-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}