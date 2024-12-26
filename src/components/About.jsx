import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Summary from "./Summary.jsx";

function About() {
  return (
    <div className="flex lg:flex-row flex-col p-3 gap-3">
      <div className="lg:w-1/2 sm:w-full h-auto">
        <Summary />
        <Experience />
      </div>
      <div className="lg:w-1/2 sm:w-full h-auto">
        <Skills />
        <Education />
      </div>
    </div>
  );
}

export default About;
