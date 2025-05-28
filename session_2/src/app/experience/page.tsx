import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Experience() {
  const navItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
  ];

  const projects = [
    {
      name: "Might Dragon",
      url: "https://github.com/rafisnaen/MightDragon",
    },
    {
      name: "Tunaskarsa",
      url: "https://github.com/rafisnaen/tunaskarsa-prototype",
    },
    {
      name: "Pneumonia Detection",
      url: "https://github.com/rafisnaen/Pneumonia-Detection",
    },
    {
      name: "B-ALL Detection",
      url: "https://github.com/rafisnaen/B-ALL_Detection",
    },
    {
      name: "Warehouse Prediction",
      url: "https://github.com/rafisnaen/BagWarehouse_Prediction",
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="pt-28 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-4xl font-bold text-center">
          Exper<span className="text-blue-500">ience</span>
        </h1>

        <div className="max-w-2xl text-center space-y-4">
          <p className="text-lg">Berikut beberapa proyek yang pernah saya kerjakan:</p>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
