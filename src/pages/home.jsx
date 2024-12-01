import homeImg from "/src/assets/img2.jpg";
const Home = () => {
  return (
    <div className="home-page">
      <div className="home-img">
        <img src={homeImg} alt="image" />
      </div>
      <div className="home-content">
        <h1>
          Hi, it's <span>Snaehath</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span></span>
        </h3>
        <p>
          Code is where creativity meets logic—a single line can build worlds or
          solve problems. Keep learning, keep building.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
