import PropTypes from "prop-types";

const Logo = ({ url, name }) => (
  <div className="inline-flex items-center gap-2">
    <img src={`./images/${url}`} className="w-8 h-8" alt={name} />
    <p className="text-sm">{name}</p>
  </div>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Skills() {
  return (
    <div className="bg-black bg-opacity-50 rounded-lg p-3 fade-in-right">
      <h1 className="font-bold text-xl text-center text-purple-300">Skills</h1>

      {/* Languages */}
      <h3 className="font-semibold text-purple-300">Languages</h3>
      <div className="flex flex-wrap gap-5 p-1 justify-start">
        <Logo url="java_logo.png" name="Java" />
        <Logo url="js_logo.png" name="JavaScript" />
        <Logo url="python_logo.png" name="Python" />
        <Logo url="cpp_logo.png" name="C++" />
        <Logo url="c_logo.png" name="C" />
      </div>

      {/* Frontend */}
      <h3 className="font-semibold text-purple-300">Frontend</h3>
      <div className="flex flex-wrap gap-5 p-1 justify-start">
        <Logo url="react_logo.png" name="React" />
        <Logo url="html5_logo.png" name="HTML5" />
        <Logo url="css3_logo.png" name="CSS3" />
        <Logo url="tailwind_logo.png" name="Tailwind CSS" />
      </div>

      {/* Backend */}
      <h3 className="font-semibold text-purple-300">Backend</h3>
      <div className="flex flex-wrap gap-5 p-1 justify-start">
        <Logo url="nodejs_logo.png" name="Node.js" />
        <Logo url="springboot_logo.png" name="Spring Boot" />
        <Logo url="mysql_logo.png" name="MySQL" />
        <Logo url="mongodb_logo.png" name="MongoDB" />
        <Logo url="maven_logo.png" name="Apache Maven" />
      </div>

      {/* Tools */}
      <h3 className="font-semibold text-purple-300">Tools</h3>
      <div className="flex flex-wrap gap-5 p-1 justify-start">
        <Logo url="git_logo.png" name="Git" />
        <Logo url="vscode_logo.png" name="Visual Studio Code" />
        <Logo url="idea_logo.png" name="IntelliJ IDEA" />
        <Logo url="vs_logo.png" name="Visual Studio" />
      </div>

      {/* Collaboration */}
      <h3 className="font-semibold text-purple-300">Collaboration</h3>
      <div className="flex flex-wrap gap-5 p-1 justify-start">
        <Logo url="devops_logo.png" name="Microsoft Azure DevOps" />
        <Logo url="github_logo.png" name="GitHub" />
        <Logo url="office_logo.png" name="Microsoft Office" />
        <Logo url="scrum_logo.png" name="Scrum Framework" />
      </div>
    </div>
  );
}

export default Skills;
