import { Route, Routes } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

// Preload images function
function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

function App() {
  useEffect(() => {
    const imagesToPreload = [
      "./images/about_profile.png",
      "./images/background_image.jpg",
      "./images/c_logo.png",
      "./images/contact_cassie.jpg",
      "./images/cpp_logo.png",
      "./images/css3_logo.png",
      "./images/devops_logo.png",
      "./images/eclipse_logo.png",
      "./images/flashcards_thumbnail.png",
      "./images/git_logo.png",
      "./images/github_logo.png",
      "./images/home_profile.jpg",
      "./images/html5_logo.png",
      "./images/idea_logo.png",
      "./images/java_logo.png",
      "./images/js_logo.png",
      "./images/maven_logo.png",
      "./images/mongodb_logo.png",
      "./images/mysql_logo.png",
      "./images/nodejs_logo.png",
      "./images/office_logo.png",
      "./images/postman_logo.png",
      "./images/python_logo.png",
      "./images/react_logo.png",
      "./images/scrum_logo.png",
      "./images/springboot_logo.png",
      "./images/sql_logo.png",
      "./images/tailwind_logo.png",
      "./images/vgdb_thumbnail.png",
      "./images/vmware_logo.png",
      "./images/vs_logo.png",
      "./images/vscode_logo.png",
      "./images/wordle_thumbnail.png",
    ];
    imagesToPreload.forEach(preloadImage);
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed h-screen w-full"
      style={{ backgroundImage: "url('./images/background_image.jpg')" }}
    >
      <Header />
      <Routes>
        <Route path="/Portfolio-V3" element={<Home />} />
        <Route path="/Portfolio-V3/about" element={<About />} />
        <Route path="/Portfolio-V3/projects" element={<Projects />} />
        <Route path="/Portfolio-V3/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
