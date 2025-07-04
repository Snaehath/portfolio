
const Lightsaber = ({on,setOn}) => {

  return (
    <div
      onClick={() => setOn(!on)}
      className="flex flex-col items-center rotate-180 relative ml-3 cursor-pointer animate-swing"
      title="Vader Saber"
    >
      {/* Handle */}
      <div className="relative bottom-12 w-4 h-12 border-t-[5px] border-b-[4px] border-gray-400 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 z-10"></div>

      {/* Switch */}
      <div
        className={`absolute bottom-44 left-[13px] w-[5px] h-[10px] rounded transition-all duration-200 ${
          on ? "bg-black border border-white" : "bg-red-700 "
        }`}
      ></div>
      <div className="flex flex-col items-center z-20">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-[10px] h-[15px] border border-gray-400 rounded-l-full rounded-r-full relative bottom-12"
          ></div>
        ))}
      </div>

      {/* Blade */}
      <div
        className={`absolute left-[2px] bottom-40 w-[10px] rounded-t-[12px]  transition-all duration-300 ${
          on ? "h-[250px]" : "h-0"
        }`}
        style={{
          background:
            "linear-gradient(to right, rgba(229,17,21,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(229,17,21,1) 100%)",
          boxShadow: "0 0 10px #e51115",
        }}
      ></div>
    </div>
  );
};

export default Lightsaber;
