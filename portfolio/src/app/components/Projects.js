import Image from "next/image";
import fastFood from "@/app/assets/fast-food-ad.jpg";
import littleLemon from "@/app/assets/little-lemon.jpg";
import deliveryTracker from "@/app/assets/delivery-tracker.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Fast Food Landing Page",
      description: "A responsive landing page built with HTML, CSS, JavaScript, and React. Designed for user engagement and accessibility, showcasing a modern front-end interface.",
      image: fastFood,
      link: "https://github.com/kimberlykpe/fast-food-website",
    },
    {
      title: "Little Lemon Project",
      description: "Completed as part of Meta's Front-End Development course, this project features a fully functional restaurant website with a reservation page. Built with HTML, CSS, JavaScript, and React, emphasizing responsive design and user experience.",
      image: littleLemon,
      link: "https://github.com/kimberlykpe/little-lemon-website",
    },
    {
      title: "Delivery Tracker App",
      description: "Developed a Python-based delivery optimization tool. Imported addresses from CSV files and calculated the fastest delivery routes to ensure timely and accurate deliveries. Focused on data-driven problem solving and automation",
      image: deliveryTracker,
      link: "https://github.com/kimberlykpe/C950",
    },
  ];

  return (
    <section id="projects" className="bg-blue py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-lt-beige">
                Browse My Recent
            </p>
            <h3 className="text-4xl font-bold text-lt-beige font-moontime">
                Projects
            </h3>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col"
            >
              <a href={project.link}>
                <div className="w-full h-64 relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </a>
              <div className="p-5 flex flex-col flex-1">
                <a href={project.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue">
                    {project.title}
                  </h5>
                </a>
                <p className="mb-3 text-md text-blue">{project.description}</p>
                <a
                    href={project.link}
                    className="mt-auto inline-flex items-center py-2 text-md font-medium text-blue"
                    target="__blank"
                    rel="noopener noreferrer"
                    >
                    Github
                    <svg
                        className="w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
