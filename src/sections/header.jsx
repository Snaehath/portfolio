import s from "/icons/sletter.png";
import n from "/icons/nletter.png";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 mt-0 w-full py-4 px-[9%] bg-transparent flex justify-between items-center ">
      <p className="flex cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110">
        <img src={s} alt="s letter" className="w-10" />
        <img src={n} alt="n letter" className="w-10" />
      </p>
      <ul className="flex">
        <li className="list-none text-white text-[1.8rem] ml-16 font-medium transition duration-300 ease-in-out border-b-3 border-transparent hover:text-red-500 hover:border-red-500">
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li className="list-none text-white text-[1.8rem] ml-16 font-medium transition duration-300 ease-in-out border-b-3 border-transparent hover:text-red-500 hover:border-red-500">
          <a href="#about">About</a>
        </li>
        <li className="list-none text-white text-[1.8rem] ml-16 font-medium transition duration-300 ease-in-out border-b-3 border-transparent hover:text-red-500 hover:border-red-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="list-none text-white text-[1.8rem] ml-16 font-medium transition duration-300 ease-in-out border-b-3 border-transparent hover:text-red-500 hover:border-red-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
