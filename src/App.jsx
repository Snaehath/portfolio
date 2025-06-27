import Home from "./pages/home";
import Header from "./sections/header";
import "./index.css";
import Project from "./pages/project";
import About from "./pages/about";
import Contact from "./pages/contact";
import Loader from "./sections/loader";
import Lab from "./pages/lab";
import { useState, useEffect } from "react";
const App = () => {
  const [showLab, setShowLab] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/lab" ||
      window.location.hash === "#lab"
    ) {
      setShowLab(true);
    }
  }, []);

  return (
    <div className="w-full h-full bg-black text-white scroll-smooth">
      {showLab ? (
        <Lab />
      ) : (
        <>
          <Header />
          <Home />
          <Loader title="ABOUT" />
          <About />
          <Loader title="PROJECTS" />
          <Project />
          <Loader title="CONTACT" />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
