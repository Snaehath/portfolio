import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] flex items-center justify-center bg-black px-4 py-10 relative"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-red-500 mb-6">Get In Touch</h2>

        <p className="text-lg text-gray-300 mb-8">
          You've seen what I build — now let's build something together! Whether
          you’re hiring, collaborating on a project, or just want to talk tech,
          I’d love to hear from you.
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

        {/* Secret Prompt (Visible) */}
        <p className="text-sm text-gray-500 italic">
          Hmm... what could I be working on right now?
        </p>

        <span className="text-red-400 font-mono text-sm block mt-1 min-h-[24px]">
          <Typewriter
            options={{
              strings: [
                "a world domination plan 🧠",
                "a secret AI sidekick 🤖",
                "an online time machine 🕰️",
                "or... just a normal application 😅",
              ],

              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </span>

        {/* 🔍 Hidden Link */}
        <p className="text-gray-500 text-sm mt-15">
          Some dots just...
          <span className="group relative inline-block ml-2">
            <a
              href="/lab"
              aria-label="oops u found it"
              className="w-2 h-2 inline-block rounded-full bg-black hover:bg-red-600 secret-beacon"
            ></a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-red-600 text-white text-xs opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
              secret lab
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
