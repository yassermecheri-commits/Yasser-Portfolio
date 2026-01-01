import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
