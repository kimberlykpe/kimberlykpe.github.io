import Image from "next/image";
import logo from "/public/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // grabs the current year dynamically

  return (
    <footer className="bg-blue shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.kimberlyescala.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} className="w-8 h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-lt-beige dark:text-white">
              kimmie.dev
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-lt-beige sm:mb-0 dark:text-gray-400">
            <li>
              <a href="mailto:kimberlykescala@gmail.com" className="hover:underline me-4 md:me-6">Contact</a>
            </li>
            <li>
              <a href="#experience" className="hover:underline me-4 md:me-6">Experience</a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
          </ul>
          <span className="block text-sm text-lt-beige sm:text-center dark:text-gray-400">
          Copyriht © {currentYear} Kimberly Escala. All Rights Reserved.
        </span>
        </div>
      </div>
    </footer>
  );
}