import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] flex items-center justify-center bg-black px-4 py-10 relative"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-red-500 mb-6 diagonal-strike">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          You've seen what I've built — now let's build something together!
          Whether you’re hiring, collaborating on a project, or just want to
          talk tech, I’d love to hear from you.
        </p>

        <p className="text-md text-gray-400 mb-8">
          Drop me a message at{" "}
          <a
            href="mailto:snaehath972002@gmail.com"
            className="text-red-600 font-medium underline hover:text-red-800 text-lg"
          >
            snaehath972002@gmail.com
          </a>{" "}
          and let’s chat.
        </p>

        {/* 🔍 Hidden Link */}
        <p className="text-sm mt-15 text-red-600">
          THE END...
          <span className="group relative inline-block ml-2">
            <a
              href="/lab"
              className="w-2 h-2 inline-block rounded-full bg-black hover:bg-red-600"
            ></a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
