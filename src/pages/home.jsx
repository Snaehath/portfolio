import Typewriter from "typewriter-effect";
import homeImg from "/src/assets/bg-removed.png";
import lighthomeImg from "/src/assets/light-theme-v3.png";

const Home = ({ on }) => {
  return (
    <div
      className="p-10 sm:p-20 lg:p-35 gap-18 flex flex-col lg:flex-row justify-center items-center rounded-lg"
      id="home"
    >
      {/* Profile Image */}
      <div className="relative w-[40vw] lg:w-[20vw] h-auto aspect-[2.5/4] ">
        {/* Dark Theme Image (Darth Vader) */}
        <img
          src={homeImg}
          alt="Profile of Snaehath"
          className={`absolute inset-0 w-full h-auto object-contain cursor-pointer rounded-full -top-[40px] 
      transition-opacity duration-700 ease-in-out
      ${on ? "opacity-100" : "opacity-0"}`}
        />

        {/* Light Theme Image (Stormtrooper) */}
        <img
          src={lighthomeImg}
          alt="Profile of Snaehath"
          className={`absolute inset-0 w-full h-auto object-contain cursor-pointer rounded-full
      transition-opacity duration-700 ease-in-out
      ${!on ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Intro Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
          Hi, it's{" "}
          <span
            className={`text-red-600 ${
              on ? "diagonal-strike black" : "diagonal-strike white"
            } `}
          >
            Snaehath
          </span>
        </h1>

        <h3 className="flex justify-center lg:justify-start items-center font-bold text-2xl sm:text-4xl lg:text-6xl mb-4 mt-2">
          I'm a
          <span className="text-red-600 font-bold ml-3 ">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Web Developer",
                  "Web Designer",
                  "ML Engineer",
                  "Gamer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>

        <p className="text-base sm:text-lg max-w-xl text-gray-500">
          Code is where creativity meets logic — a single line can build worlds
          or solve problems. Keep learning, keep building.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center lg:justify-start">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/snaehath-p-755997364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-red-400 text-3xl sm:text-4xl rounded-full m-2 text-red-400 transition-transform duration-300 ease-in-out  hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          {/* Gmail */}
          <a
            href="mailto:snaehath972002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-red-400 text-3xl sm:text-4xl rounded-full m-2 text-red-400 transition-transform duration-300 ease-in-out  hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Snaehath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-red-400 text-3xl sm:text-4xl rounded-full m-2 text-red-400 transition-transform duration-300 ease-in-out  hover:-translate-y-1.5 hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
