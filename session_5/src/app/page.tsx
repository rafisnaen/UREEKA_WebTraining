"use client";
import { SignInButton, SignUpButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="bg-black text-gray-700 pt-28 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="pt-25 text-4xl font-bold text-center">
        <span className="text-white">Task : </span>
        <span className="text-blue-500">Session 5</span>
      </h1>
      <div className="flex gap-4">
        <SignUpButton>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </SignUpButton>
        <SignInButton>
          <button className="bg-white text-black px-4 py-2 rounded">
            Sign In
          </button>
        </SignInButton>
      </div>
      <SignedIn>
        <p>Sudah login! Menuju <Link href="/dashboard">halaman utama</Link></p>
      </SignedIn>
    </div>
  );
}
