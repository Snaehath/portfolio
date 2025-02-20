import s from "/icons/sletter.png";
import n from "/icons/nletter.png";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 mt-0 w-full py-4 px-[9%] bg-transparent flex justify-between items-center ">
      <p className="flex cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110">
        <img src={s} alt="s letter" className="w-10" />
        <img src={n} alt="n letter" className="w-10" />
      </p>
      <ul className="flex text-2xl ml-16 font-medium gap-3">
        <li className="hover:text-red-700 hover:border-b-2">
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li className="hover:text-red-700 hover:border-b-2">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-red-700 hover:border-b-2">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-red-700 hover:border-b-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
