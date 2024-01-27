import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
//import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Social />
    </>
  );
}

export default App;
