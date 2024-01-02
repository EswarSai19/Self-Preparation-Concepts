import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Intro from "./Components/Intro/intro";
import Navbar from "./Components/Navbar/navbar";
import Skills from "./Components/Skills/skills";
import Works from "./Components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
