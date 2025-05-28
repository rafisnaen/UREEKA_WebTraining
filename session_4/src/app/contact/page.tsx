import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const navbarItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
    { name: "Weather", link: "/blog", icon: null },
  ];

  return (
    <>
      <FloatingNav navItems={navbarItems} />
      <div className="pt-28 bg-black text-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-white text-4xl font-bold text-center">
          Cont<span className="text-blue-500">act</span>
        </h1>
        <p className="text-lg text-white text-center">
          If you have any questions, feel free to reach out !
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/rafisnaen/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6281991711208" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:scale-110 transition-transform">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/share/1CNJf7BYJ8/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:scale-110 transition-transform">
            <FaFacebook />
          </a>
          <a href="https://t.me/emptymoonnn" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition-transform">
            <FaTelegram />
          </a>
          <a href="mailto:muhammadrafiisnaen@gmail.com" className="text-red-500 text-2xl hover:scale-110 transition-transform">
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
}
