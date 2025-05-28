import { FloatingNav } from "@/components/ui/floating-navbar";

export default function about() {
  const navItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
  ];

  return (
    <> 
      <FloatingNav navItems={navItems} />
      <div className="pt-28 bg-black text-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-white text-4xl font-bold text-center">
          About<span className="text-blue-500">Me</span>
        </h1>
        <div className="text-left text-lg text-gray-700 max-w-3xl">
          <p className="text-2xl text-white font-extrabold mb-4">Muhammad Rafi Isnaen</p>
          <p className="text-white">Binus University student, currently studying in computer science major with a strong desire to improve my own skills.
            I am ambitious and eager to learn, so I had satisfactory academic performance during my high school and college education so far.
          </p>
        </div>
      </div>
    </>
  );
}
