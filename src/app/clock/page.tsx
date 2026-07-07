"use client";

import { useState, useEffect } from "react";
import { componentCode } from "./clockcode";
export default function Clock() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );

      const hours = now.getHours();

      if (hours >= 5 && hours < 12) {
        setGreeting("Good Morning! ☀️");
      } else if (hours >= 12 && hours < 17) {
        setGreeting("Good Afternoon! 🌤️");
      } else if (hours >= 17 && hours < 21) {
        setGreeting("Good Evening! 🌆");
      } else {
        setGreeting("Good Night! 🌙✨");
      }
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyCode = async () => {
    await navigator.clipboard.writeText(componentCode);
    alert("Code copied!");
  };

  return (
    <div className="flex min-h-screen flex-col flex-1">
      <div className="flex justify-center pt-8">
        <h1 className="text-4xl font-semibold">Your Clock Component</h1>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center w-2/4 h-40 bg-gray-100 rounded-lg shadow">
          <div className="text-3xl font-bold">{greeting}</div>

          <div className="bg-blue-200 w-full flex justify-center text-2xl py-3 mt-4">
            {time}
          </div>
        </div>

        <button
          onClick={() => setShowCode(true)}
          className="mt-6 text-blue-700 font-semibold hover:underline"
        >
          Click here to view code
        </button>
      </div>

      {/* Right Sidebar */}
      {showCode && (
        <div className="fixed right-0 top-0 h-screen w-125 bg-gray-900 text-white p-5 overflow-y-auto shadow-2xl z-50">
          <button
            onClick={() => setShowCode(false)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Source Code</h2>

            <button
              onClick={copyCode}
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
            >
              📋 Copy
            </button>
          </div>

          <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
            <code>{componentCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
