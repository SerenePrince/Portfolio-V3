function Experience() {
  return (
    <div className="bg-black bg-opacity-50 rounded-lg p-3 mt-3 sm:mb-3 fade-in-left">
      <h1 className="font-bold text-xl text-center text-purple-300">
        Experience
      </h1>

      <div>
        <h2 className="font-bold text-lg text-purple-300">Student Tester</h2>
        <h3 className="font-semibold">
          Algonquin College | Ottawa, ON | Sep 2024 - Dec 2024
        </h3>
        <p>
          I contributed to the R3 project as part of the testing team, where I
          designed and executed test cases for new features developed by the
          Thesis SM team. I played a key role in identifying and reporting bugs,
          ensuring effective cross-team communication, and resolving issues
          promptly.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg text-purple-300 mt-3">
          Application Developer
        </h2>
        <h3 className="font-semibold">
          FINTRAC | Ottawa, ON | Jan 2024 - Apr 2024
        </h3>
        <p>
          I developed a Java/Maven application to automate data synchronization,
          reducing processing time from 8 hours to under a minute. I also
          identified and resolved bugs, enhancing system functionality, and
          improved form validation to boost overall accuracy and efficiency.
        </p>
      </div>
    </div>
  );
}

export default Experience;
