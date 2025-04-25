import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Learning from "./components/Learning.jsx";
import Contact from "./components/Contact.jsx";
function App() {

  return (
    <main className="text-gray-400 bg-gradient-to-r from-gray-900 via-blue-900 to-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Learning />
      <Contact />
    </main>
  )
}

export default App
