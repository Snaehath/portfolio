import Logo from "../assets/logo-s.png";

const Header = () => {
  return (
    <div className="header-section">
      <p className="logo">
        <img src={Logo} alt="s letter" style={{ width: "2.5rem" }} />N
      </p>
      <ul className="links">
        <li className="active">Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
