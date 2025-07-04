const Loader = ({ title }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <h2 className="diagonal-strike text-5xl sm:text-7xl font-bold tracking-widest text-red-600">
        {title}
      </h2>
    </section>
  );
};

export default Loader;
