const Loader = ({ title, on }) => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <h2
        className={`text-5xl sm:text-7xl font-bold tracking-widest text-red-600 ${
              on ? "diagonal-strike black" : "diagonal-strike white"
            } `}
      >
        {title}
      </h2>
    </section>
  );
};

export default Loader;
