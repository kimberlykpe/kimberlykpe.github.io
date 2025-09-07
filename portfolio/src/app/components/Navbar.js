'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-blue text-sm">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between border-b border-blue py-3">
        <a className="flex items-center gap-x-2 text-xl font-semibold text-lt-beige" href="#">
          <Image src={logo} alt="Logo" width={40} height={40} />
          kimmie.dev
        </a>

        {/* Mobile toggle button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden inline-flex justify-center items-center p-2 rounded-md border border-lt-beige bg-blue text-lt-beige"
            aria-label="navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-5">
          <a href="#contact" className="text-md text-lt-beige">Contact</a>
          <a href="#experience" className="text-md text-lt-beige">Experience</a>
          <a href="#about" className="text-md text-lt-beige">About</a>
          <a href="#projects" className="text-md text-lt-beige">Projects</a>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-blue flex flex-col items-center justify-center gap-10 sm:hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-lt-beige p-2 rounded-md bg-blue border border-lt-beige"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Links */}
          <a
            href="#contact"
            className="text-2xl font-bold text-lt-beige"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#experience"
            className="text-2xl font-bold text-lt-beige"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#about"
            className="text-2xl font-bold text-lt-beige"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-2xl font-bold text-lt-beige"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </div>
      )}
    </header>
  );
}
