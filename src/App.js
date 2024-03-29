import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import Contact from "./Pages/Contact";
import "./Css/Footer.css";
import "./Css/Header.css";
import "./Css/Projects.css";
import "./Css/Contact.css";
import "./Css/Skills.css";
import "./Css/About.css";
import "./Components/Home/Section1/Section1.css";
import "./Components/Home/Section2/Section2.css";
import "./Components/Home/Section3/Section3.css";
import "./Components/Home/Section4/Section4.css";
import "./Components/Home/Section5/Section5.css";
import "./Components/About/Certifications/Certifications.css";
import "./Components/About/Awards/Awards.css";
import "./Components/About/Loc/Loc.css";
import "./Components/Skills/TechSkills/TechSkills.css";
import "./Components/Skills/GeoInt/GeoInt.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
