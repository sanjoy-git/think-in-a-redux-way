import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter((pre) => pre + 1);
  };

  const handleDec = () => {
    setCounter((pre) => pre - 1);
  };

  return (
    <div className="text-center mt-10">
      <p className="text-2xl">{counter}</p>
      <br />
      <button
        className="py-1 px-2 text-white cursor-pointer m-1 bg-slate-700 rounded-md"
        onClick={handleInc}
      >
        Inc
      </button>
      <button
        className="py-1 px-2 text-white cursor-pointer m-1 bg-slate-700 rounded-md"
        onClick={handleDec}
      >
        Dec
      </button>
    </div>
  );
}
