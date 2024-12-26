import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed h-screen w-full"
      style={{ backgroundImage: "url('/images/background_image.jpg')" }}
    >
      <Header />
      <Routes>
        <Route path="/noahpn" element={<Home />} />
        <Route path="/noahpn/home" element={<Home />} />
        <Route path="/noahpn/about" element={<About />} />
        <Route path="/noahpn/projects" element={<Projects />} />
        <Route path="/noahpn/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
