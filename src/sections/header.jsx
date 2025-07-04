import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons
import Lightsaber from "../components/lightsaber";

const Header = ({ on, setOn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-[9%] bg-black/40 lg:backdrop-blur-md flex justify-between items-center z-50 shadow-md border-b border-white/10">
      {/* Logo */}
      <a
        href="#home"
        className="flex orbitron text-5xl font-bold cursor-pointer transition-colors duration-500 ease-in-out hover:scale-110"
        aria-label="Homepage"
      >
        SN
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item}
              className={`list-none text-[1.8rem] ml-8 font-medium transition-colors duration-300 ease-in-out border-b-2 border-transparent
                ${
                  on
                    ? "hover:text-red-500 hover:border-red-500"
                    : "hover:text-white hover:border-white"
                }`}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <li className="list-none absolute right-20">
          <Lightsaber on={on} setOn={setOn} />
        </li>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-3xl z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 h-full bg-black/90 flex flex-col items-center pt-24 transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-8 text-white text-2xl">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="hover:text-red-500 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
