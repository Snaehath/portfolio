import Typewriter from "typewriter-effect";
import homeImg from "/src/assets/bg-removed.png";
const Home = () => {
  return (
    <div
      className="p-36 flex justify-center items-center gap-12 rounded-lg"
      id="home"
    >
      <img
        src={homeImg}
        alt="image"
        className=" w-[20vw] rounded-[50%] cursor-pointer transition duration-300 ease-linear -top-[60px] hover:shadow-[8px_4px_28px_rgba(755,0,0,0.5)]"
      />
      <div>
        <h1 className="text-8xl font-bold">
          Hi, it's <span className="text-red-600">Snaehath</span>
        </h1>
        <h3 className="flex typing-text font-bold text-6xl mb-4 leading-25">
          I'm a
          <span className="text-red-600 font-bold ml-3">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Web Developer",
                  "Web Designer",
                  "Gamer",
                  "ML Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p>
          Code is where creativity meets logic—a single line can build worlds or
          solve problems. Keep learning, keep building.
        </p>
        <div className="mt-3">
          <a
            href="#"
            className="inline-flex justify-center items-center w-20 h-20 bg-transparent border-2 border-red-400 text-5xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin "></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-20 h-20 bg-transparent border-2 border-red-400 text-5xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-20 h-20 bg-transparent border-2 border-red-400 text-5xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
