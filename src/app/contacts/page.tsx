import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 bg-stone-800 p-3 md:grid-cols-2 md:gap-6 md:p-6 lg:gap-8">
      <div className="flex flex-col items-center rounded-lg bg-stone-700 p-2">
        <div className="flex w-full flex-col items-center">
          <h2 className="pb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Me
          </h2>
          <hr className="mt-2 w-full border-t-2 border-gray-500 md:mb-2" />
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <p className="mb-6 max-w-xl text-center text-gray-300 md:text-lg">
            I'm always open to new opportunities, interesting projects, or
            simply connecting with like-minded professionals. Feel free to reach
            out via social media or send me an email — let’s create something
            great together!
          </p>

          <div className="flex flex-col flex-wrap items-center justify-center gap-6 md:flex-row">
            <a
              href="https://github.com/R-Ohirok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition duration-300 hover:text-blue-500"
            >
              <Github />
              <p>GitHub</p>
            </a>

            <a
              href="https://www.linkedin.com/in/roman-o-b57838360/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition duration-300 hover:text-blue-500"
            >
              <Linkedin />
              <p>LinkedIn</p>
            </a>

            <a
              href="mailto:roman.ohirok.work@gmail.com"
              className="flex items-center gap-2 transition duration-300 hover:text-blue-500"
            >
              <Mail />
              <p>roman.ohirok.work@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/frontend.jpg"
        alt="frontend"
        className="h-full w-full rounded-lg object-cover"
      />
    </section>
  );
}
