import { FloatingNav } from "@/components/ui/floating-navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect"; 

export default function Home() {
  const navbarItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
  ];

  return (
    <>
      <FloatingNav navItems={navbarItems} />
      <div className="pt-28 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-4xl font-bold text-center">
          Task : <span className="text-blue-500">Session 2</span>
        </h1>
          <TypewriterEffect words={[
            { text: "Welcome" },
            { text: "to" },
            { text: "My"},
            { text :"Portofolio"}]} />
      </div>
    </>
  );
}
