"use client";

import { useState } from "react";
import React from "react";

export default function CountEven() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [showCount, setshowCount] = useState(true);
  const [error, setError] = useState(false);
  const countEvenNumber = (numberValues) => {
    const numberArray = numberValues
      .split(",")
      .map((item) => Number(item.trim()));
    const isValid = numberArray.every((num) => !Number.isNaN(num));
    if (isValid) {
      setshowCount(true);
      setCount(
        numberArray.filter((num) => Number.isInteger(num) && num % 2 === 0)
          .length,
      );
      setError(false);
    } else {
      setshowCount(false);
      setCount(0);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="flex justify-center m-4 fixed top-2">
        <h1 className="text-4xl font-semibold">Count Even Numbers Component</h1>
      </div>
      <div className="flex flex-col w-3/5 h-full bg-mauve-400 items-center justify-center">
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
          onClick={() => countEvenNumber(inputValue)}
        >
          Count Even Numbers
        </button>
        {error && (
          <div className="flex justify-center m-4">
            <h4 className="text-xl font-semibold text-red-800">
              please enter only number with comma seprated
            </h4>
          </div>
        )}
        {showCount && (
          <div className="flex justify-center m-4">
            <h4 className="text-xl font-semibold">Total Count: {count}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
