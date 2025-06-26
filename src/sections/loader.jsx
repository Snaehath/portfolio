const Loader = ({ title }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <h2 className="text-5xl sm:text-7xl font-bold tracking-widest text-red-600 animate-fade-in">
        {title}
      </h2>
    </section>
  );
};

export default Loader;
