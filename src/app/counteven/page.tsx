"use client";

import { useState, useEffect } from "react";
import React from "react";

export default function CountEven() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  //   const countEvenNumber = (numberValues) => {
  //     const numberArray = numberValues.split(",").map(Number);
  //     setCount(
  //       numberArray.filter((num) => Number.isInteger(num) && num % 2 === 0)
  //         .length,
  //     );
  //   };
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="flex justify-center m-4 fixed top-2">
        <h1 className="text-4xl font-semibold">Count Even Numbers Component</h1>
      </div>
      <div className="flex flex-col w-3/5 h-full bg-black items-center justify-center">
        <h1>Enter number</h1>
        <input
          className="w-3/5 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Example: 1,2,3,4,5,6"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          className="w-1/4 h-16 m-4 bg-orange-800 text-white border-2 border-white "
          //   onClick={countEvenNumber}
        >
          Count Even Numbers
        </button>
      </div>
    </div>
  );
}
