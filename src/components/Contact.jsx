import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="bg-black bg-opacity-50 rounded-lg p-3 lg:w-1/2 sm:w-full fade-in ">
        <h1 className="font-bold text-3xl text-center text-purple-300 mb-2">
          Let&apos;s Connect!
        </h1>
        <div className="flex space-x-5 justify-center text-center">
          <a
            href="https://www.linkedin.com/in/nparknguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-300 rounded-lg hover:text-purple-300 hover:bg-white transition inline-flex gap-3 p-3 items-center text-xl"
          >
            <FaLinkedin size={35} /> LinkedIn
          </a>
          <a
            href="https://github.com/SerenePrince"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-300 rounded-lg hover:text-purple-300 hover:bg-white transition inline-flex gap-3 p-3 items-center text-xl"
          >
            <FaGithub size={35} /> GitHub
          </a>
          <a
            href="mailto:noahparknguyen@gmail.com"
            className="bg-purple-300 rounded-lg hover:text-purple-300 hover:bg-white transition inline-flex gap-3 p-3 items-center text-xl"
          >
            <FaEnvelope size={35} /> Email
          </a>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col text-center text-sm p-3 items-center align-middle">
          <img
            src="./images/contact_cassie.jpg"
            alt="A photo of Cassie the cat, looking rather displeased."
            className="rounded-lg lg:w-1/3 sm:w-1/2"
          ></img>
          <p className="mt-2">© 2024 Noah Park-Nguyen. All rights reserved.</p>
          <p className="mt-2">
            Feel free to reach out to me via any of the platforms above!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
