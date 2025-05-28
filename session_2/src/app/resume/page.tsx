"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button"


export default function resume() {
  const navItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV-Muhammad Rafi Isnaen-2702303362.jpg";
    link.download = "Resume-Muhammad-Rafi-Isnaen.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="pt-28 flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-4xl font-bold text-center">
          Res<span className="text-blue-500">ume</span>
        </h1>

      <p className="text-lg text-gray-600 text-center">Semester 1 Resume</p>
      <img
          src="/CV-Muhammad Rafi Isnaen-2702303362.jpg"
          alt="Resume of Muhammad Rafi Isnaen"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      {/* <a
        href="/CV-Muhammad Rafi Isnaen-2702303362.jpg"
        download
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >Download Resume</a> */}
      <Button variant="secondary" onClick={handleDownload}>
        Download here
      </Button>
      </div>
    </>
  );
}
