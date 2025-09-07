import Image from "next/image";
import portraitHeadshot from "@/app/assets/headshot.jpg";
import landscapeHeadshot from "@/app/assets/headshot-landscape.jpg";
import location from "@/app/assets/location.png";

export default function Hero() {
  return (
    <section className="bg-lt-beige">
      <div className="max-w-screen-xl px-4 py-10 mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-1">
          <p className="text-2xl md:text-5xl font-moontime text-blue text-shadow-2xs tracking-tight leading-none md:text-10xl">
            Welcome! I&apos;m
          </p>
          <p className="text-7xl md:text-9xl font-moontime text-blue text-shadow-2xs tracking-tight leading-none md:text-10xl">
            Kimberly Escala
          </p>
          <h1 className="text-blue">Front-End Developer | Driven to deliver scalable solutions with strong technical, analytical, and project management skills</h1><br />

          <div className="block sm:hidden my-5">
            <Image
              src={landscapeHeadshot}
              className="w-full h-auto rounded-lg"
              alt="headshot"
            />
          </div>

          <p className="mb-6 text-md text-blue dark:text-gray-400">
            I design and develop responsive, accessible websites using React, Next.js, Tailwind CSS, and Drupal. With experience in SEO, A/B testing, and analytics, I create user-friendly interfaces that not only look great but perform at scale. Always eager to learn, I&apos;m motivated to adapt to new technologies and deliver solutions that make a measurable impact.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/kimberly-escala"
              className="inline-flex items-center px-2 py-3 text-base text-md text-center text-dark-blue rounded-lg border border-dark-blue hover:bg-blue hover:text-lt-beige"
              target="__blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kimberlykescala@gmail.com"
              className="inline-flex items-center px-4 py-3 text-base text-md text-center text-lt-beige bg-blue border rounded-lg hover:bg-blue hover:text-lt-beige"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-2 lg:order-2 hidden sm:flex">
          <Image
            src={portraitHeadshot}
            className="w-full h-auto rounded-lg"
            alt="headshot"
          />
        </div>
      </div>
    </section>
  );
}
