import homeImg from "/src/assets/bg-removed.png";
const Home = () => {
  return (
    <div
      className="p-36 flex justify-center items-center gap-32 rounded-lg"
      id="home"
    >
      <div>
        <img
          src={homeImg}
          alt="image"
          className="relative w-96 rounded-[50%]"
        />
      </div>
      <div className="home-content">
        <h1 className="text-8xl font-bold">
          Hi, it's <span className="text-red-600">Snaehath</span>
        </h1>
        <h3 className="typing-text font-bold text-6xl mb-4">
          I'm a <span className="text-red-500"></span>
        </h3>
        <p>
          Code is where creativity meets logic—a single line can build worlds or
          solve problems. Keep learning, keep building.
        </p>
        <div>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-500 hover:text-white hover:transform-flat hover:scale-125"
          >
            <i className="fa-brands fa-linkedin "></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-500 hover:text-white hover:transform-flat hover:scale-125"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border border-red-400 text-4xl rounded-[50%] m-3 text-red-500 hover:text-white hover:transform-flat hover:scale-125"
          >
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
