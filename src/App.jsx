import Home from "./pages/home";
import Header from "./sections/header";
// import "./app.css";
import "./index.css";
import Project from "./pages/project";
import About from "./pages/about";
const App = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <Header />
      <Home />
      <About />
      <Project />
    </div>
  );
};

export default App;
