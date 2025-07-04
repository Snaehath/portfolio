import Home from "./pages/home";
import Header from "./sections/header";
import "./index.css";
import Project from "./pages/project";
import About from "./pages/about";
import Contact from "./pages/contact";
import Loader from "./sections/loader";
import { useState } from "react";

const App = () => {
  const [on, setOn] = useState(true);
  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-700 ${
        on ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header on={on} setOn={setOn} />
      <Home on={on} />
      <Loader title="ABOUT" />
      <About />
      <Loader title="PROJECTS" />
      <Project />
      <Loader title="CONTACT" />
      <Contact />
    </div>
  );
};

export default App;
