const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] " id="about">
      <div className="max-w-[90%] text-justify p-5 rounded-2xl shadow-[0_1px_10px_grey] text-5xl leading-20">
        <p>
          In addition to
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            {" "}
            full stack development
          </span>
          , I'm deeply passionate about{" "}
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            Machine Learning{" "}
          </span>
          and{" "}
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            AI
          </span>
          . I’ve honed my skills in both fields independently, mastering the
          intricacies of web development and the transformative power of
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            {" "}
            intelligent systems
          </span>
          . Now, I'm excited to merge these two domains to build innovative
          solutions that push boundaries and spark new possibilities like
          creating my own version of a{" "}
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            Big Bang
          </span>{" "}
          in the{" "}
          <span className="text-red-600 font-bold italic capitalize animate-pulse">
            tech world
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
