import s from "/icons/sletter.png";
import n from "/icons/nletter.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-[9%] bg-black/30 backdrop-blur-md flex justify-between items-center z-50 shadow-md border-b border-white/10">
      <a href="#home" className="flex cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" aria-label="Homepage">
        <img src={s} alt="Letter S" className="w-10" />
        <img src={n} alt="Letter N" className="w-10" />
      </a>

      <nav>
        <ul className="flex">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li
              key={item}
              className="list-none text-white text-[1.8rem] ml-16 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:text-red-500 hover:border-red-500"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
