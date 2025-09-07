import Image from "next/image";
import mailIcon from "/public/mail.svg";
import linkedinIcon from "/public/linkedin.svg";

export default function Contact() {
  return (
    <section id="contact" className="bg-lt-beige py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-blue uppercase tracking-widest mb-2">Get in Touch</p>
        <h3 className="text-4xl font-bold text-blue mb-8 font-moontime">Contact Me</h3>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 bg-blue py-4 px-6 rounded-lg">
          <div className="flex items-center gap-3 justify-center">
            <Image src={mailIcon} alt="Email icon" className="w-6 h-6" />
            <a
              href="mailto:kimberlykescala@gmail.com"
              className="text-lt-beige hover:underline text-md"
            >
              kimberlykescala@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Image src={linkedinIcon} className="w-6 h-6" alt="LinkedIn logo"/>
            <a
              href="https://www.linkedin.com/in/kimberly-escala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lt-beige hover:underline text-md"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
