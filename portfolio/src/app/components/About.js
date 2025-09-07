import Image from "next/image";
import portrait from "@/app/assets/summit-one-portrait.jpg";
import landscape from "@/app/assets/summit-one-landscape.jpeg";
import experienceIcon from "@/app/assets/experience.png";
import educationIcon from "@/app/assets/education.png";
import location from "@/app/assets/location.png";

export default function About() {
  return (
    <section id="about" className="py-16 bg-lt-beige">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
            <Image
                src={portrait}
                alt="Portrait pic with Summit One viewpoint"
                className="w-full h-auto hidden rounded-lg sm:block"
            />
            <Image
                src={landscape}
                alt="Landscape pic with Summit One viewpoint"
                className="w-full h-auto block rounded-lg sm:hidden"
            />
            </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center text-center flex-1 bg-white p-6 rounded-lg shadow-md">
                <Image src={experienceIcon} alt="Experience Icon" className="w-12 h-12 mb-3" />
                <h3 className="text-md font-semibold mb-2">Certifications</h3>
                <p className="text-blue">
                  COMPTIA Project+<br />
                  Meta Front-End Developer<br />
                </p>
              </div>

              <div className="flex flex-col items-center text-center flex-1 bg-white p-6 rounded-lg shadow-md">
                <Image src={educationIcon} alt="Education Icon" className="w-12 h-12 mb-3" />
                <h3 className="text-md font-semibold mb-2">Education</h3>
                <p className="text-blue">
                  B.S. in Computer Science
                </p>
              </div>
            </div>

            <div className="p-6 dark:bg-gray-800">
                <p className="flex items-center text-blue mb-5">
                <Image src={location} className="w-4 h-4 mr-1" alt="location icon" />
                <span>California</span>
                </p>
              <p className="text-blue leading-relaxed text-md">
                Hi! I&apos;m <span className="font-semibold">Kimberly Escala</span> — a web designer currently working as a Front-End Developer at Smile Train. I love building websites because it lets me blend creativity with functionality in both personal and professional projects. I&apos;m passionate about learning, developing, and producing functional projects! <br /> <br />
                <span className="font-semibold"><a href="mailto:kimberlykescala@gmail.com" className="text-blue hover:underline">
                Let&apos;s connect
                </a>!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}