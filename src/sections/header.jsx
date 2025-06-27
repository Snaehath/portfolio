import { useState } from "react";
import s from "/icons/sletter.png";
import n from "/icons/nletter.png";
import { Menu, X } from "lucide-react"; // Lucide icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-[9%] bg-black/30 lg:backdrop-blur-md flex justify-between items-center z-50 shadow-md border-b border-white/10">
      {/* Logo */}
      <a
        href="#home"
        className="flex cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
        aria-label="Homepage"
      >
        <img src={s} alt="Letter S" className="w-10" />
        <img src={n} alt="Letter N" className="w-10" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item}
              className="list-none text-white text-[1.8rem] ml-8 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:text-red-500 hover:border-red-500"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
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
