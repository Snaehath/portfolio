import homeImg from "/src/assets/bg-removed.png";
const Home = () => {
  return (
    <div
      className="p-36 flex justify-center items-center gap-12 rounded-lg"
      id="home"
    >
      <div>
        <img
          src={homeImg}
          alt="image"
          className="relative w-[20vw] rounded-[50%] cursor-pointer transition duration-300 ease-linear -top-[60px] hover:shadow-[8px_4px_28px_rgba(755,0,0,0.5)]"
        />
      </div>
      <div className="home-content">
        <h1 className="text-8xl font-bold">
          Hi, it's <span className="text-red-600">Snaehath</span>
        </h1>
        <h3 className="typing-text font-bold text-6xl mb-4">
          I'm a{" "}
          <span className="text-red-600 font-bold">Full Stack Developer</span>
        </h3>
        <p>
          Code is where creativity meets logic—a single line can build worlds or
          solve problems. Keep learning, keep building.
        </p>
        <div>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin "></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-400 transition-transform duration-300 ease-in-out hover:text-white hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
