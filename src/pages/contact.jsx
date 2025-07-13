import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] flex items-center justify-center px-4 py-10 relative"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-6xl font-bold text-red-600 mb-6 diagonal-strike">
          Get In Touch
        </h2>

        <p className="text-xl mb-8">
          You've seen what I've built — now let's build something together!
          Whether you’re hiring, collaborating on a project, or just want to
          talk tech, I’d love to hear from you.
        </p>

        <p className="text-lg mb-8">
          Drop me a message at{" "}
          <a
            href="mailto:snaehath972002@gmail.com"
            className="text-red-600 font-medium underline hover:text-red-800 text-lg"
          >
            snaehath972002@gmail.com
          </a>{" "}
          and let’s chat.
        </p>
        <a
          href="/portfolio/Resume_Snaehath.pdf"
          download
          className="inline-block px-6 py-3 border-2 border-red-600 text-red-600 font-bold tracking-wider uppercase rounded-md hover:bg-red-600 hover:text-black transition duration-300 shadow-[0_0_10px_rgba(255,0,0,0.6)] dark:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
        >
          Download Resume
        </a>

        <span className="text-2xl mb-8 text-red-600 font-bold mt-5">
          <Typewriter
            options={{
              strings: ["Thanks for visiting!", "Have a great day!"],
              autoStart: true,
              loop: false,
              cursor: "",
            }}
          />
        </span>
      </div>
    </section>
  );
};

export default Contact;
