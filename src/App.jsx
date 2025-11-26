import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="bg-[#283618] w-screen h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#FEFAE0] text-6xl">Notifications</h1>
        <h2 className="text-[#FEFAE0] text-3xl tracking-wide">
          Check your latest alerts{" "}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <FaRegBell size={100} color="#FEFAE0" />
        {count > 0 && (
          <p className="text-[#FEFAE0] text-3xl flex flex-col justify-center items-center gap-2">
            <span className="bg-[#FEFAE0] w-10 h-10 flex justify-center items-center   rounded-full text-[#283618]">
              {count}
            </span>
            new notifications
          </p>
        )}
        {count > 0 || (
          <p className="text-[#FEFAE0] text-3xl flex flex-col justify-center items-center gap-2">
            You are all cought up
          </p>
        )}
      </div>
      <div className="flex gap-[1.3rem] justify-around items-center text-[#283618]  ">
        <button
          onClick={() => {
            setCount(0);
          }}
          className="bg-[#FEFAE0] p-2 rounded-2xl text-[1.2rem] font-medium cursor-pointer"
        >
          clear all notif
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-[#FEFAE0] p-2 rounded-2xl text-[1.2rem] font-medium cursor-pointer"
        >
          add notif
        </button>
        <button
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(count);
          }}
          className="bg-[#FEFAE0] p-2 rounded-2xl text-[1.2rem] font-medium cursor-pointer"
        >
          rem notif
        </button>
      </div>
    </section>
  );
};
export default App;
