import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyWork from "./components/MyWork";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <About />
      <MyWork />
      <Skills />
      <Resume />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
