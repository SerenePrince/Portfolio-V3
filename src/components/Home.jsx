import { FaFileDownload } from "react-icons/fa";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

function Home() {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="flex p-3 lg:w-1/2 w-full justify-center items-center rounded-lg bg-opacity-50 bg-black fade-in">
        <div className="flex lg:flex-row flex-col items-center  text-center gap-3">
          <img
            className="w-1/2 h-auto rounded-lg fade-in-left"
            src="/images/home_profile.jpg"
            alt="Noah Park-Nguyen portrait"
          />
          <div className="text-left">
            <h1 className="text-3xl font-bold fade-in-top text-purple-300">
              Noah Park-Nguyen 🇨🇦
            </h1>
            <h2 className="text-2xl font-semibold fade-in-top">
              Software Developer
            </h2>
            <span className="flex items-center gap-1 mt-2 fade-in-right">
              <FaLocationDot size={12} />
              Based in Ottawa, ON | Open to Remote Positions
            </span>
            <p className="fade-in-right mt-2">
              I&apos;m currently exploring new opportunities and looking to
              contribute my skills as a programmer.
            </p>
            <a
              href="/documents/NoahPN_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 rounded bg-purple-300 hover:bg-white hover:text-purple-300 transition mt-2 fade-in-right inline-flex items-center gap-1"
            >
              <FaFileDownload size={13} />
              My Resume
            </a>
            <div className="flex gap-4 mt-3 fade-in-bottom">
              <a
                href="https://www.linkedin.com/in/nparknguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-purple-300 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/SerenePrince"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-purple-300 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:noahparknguyen@gmail.com"
                className=" hover:text-purple-300 transition"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
