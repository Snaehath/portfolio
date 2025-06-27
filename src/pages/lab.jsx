import { useState } from "react";

const Lab = () => {
  const [reveal, setReveal] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6 animate-pulse">
          🔬 Welcome to the Lab
        </h1>

        <p className="text-gray-300 mb-6 text-lg sm:text-xl">
          This isn't just any section. You've found the lab — the place where
          prototypes are brewing, bugs are evolving into features, and new ideas
          are preparing for launch 🚧. You'll find fake and original data
          here — but it's up to you to decide what to believe.
        </p>

        <p className="text-gray-400 mb-4 italic">
          Please don’t touch the glowing red buttons. They bite.
        </p>

        <div className="mt-10 space-y-6 text-left text-sm sm:text-base text-gray-400 transition-all duration-500">
          {!reveal ? (
            <>
              <div>
                <h2 className="text-red-500 font-semibold">
                  🧠 Project: AI Sidekick
                </h2>
                <p>
                  Currently building a conversational assistant powered by LLMs
                  + Gemini API. Goal: build context-aware help that feels
                  natural.
                </p>
              </div>
              <div>
                <h2 className="text-red-500 font-semibold">
                  🕰️ Project: Time Machine UI
                </h2>
                <p>
                  Working on a timeline-based UI that allows you to navigate
                  "states" of an app through snapshots. Beta testing next month.
                </p>
              </div>
              <div>
                <h2 className="text-red-500 font-semibold">
                  😅 Just a Todo App
                </h2>
                <p>
                  Well, I need to test new architecture. It’s *technically* just
                  a todo app. With dark mode. And voice input. And
                  teleportation. Maybe.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-red-500 font-semibold">
                  📰 Project: AI News Writer
                </h2>
                <p>
                  Experimental AI that writes futuristic news stories — powered
                  by language models trained on current events + wild
                  imagination. That’s all for now... confidential 🤫.
                </p>
              </div>
              <div>
                <h2 className="text-red-500 font-semibold">
                  🖼️ Project: Collaborative AI Image Generator
                </h2>
                <p>
                  Two AIs engage in a casual back-and-forth conversation —
                  sharing ideas and refining prompts — to co-create a single
                  image. Think of it as a digital brainstorming session... with
                  machines. That’s all for now — it’s still quietly evolving
                  🤖🧠.
                </p>
              </div>
              <a
                href="/#home"
                aria-label="Return to home"
                className="inline-block mt-10 px-5 py-2 bg-gray-800 border border-white/10 rounded-md hover:bg-red-600 transition duration-300 text-white font-semibold"
              >
                Close Lab
              </a>
            </>
          )}
        </div>

        {!reveal && (
          <button
            onClick={() => setReveal(true)}
            className="mt-10 px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition-all duration-300 animate-pulse hover:animate-none glowing-button"
          >
            Do Not Press
          </button>
        )}
      </div>
    </section>
  );
};

export default Lab;
