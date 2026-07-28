"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white m-4 items-center justify-center">
      <div className="text-4xl font-extrabold text-fuchsia-950">
        Next JS Examples
      </div>
      <div className=" flex flex-col m-4">
        <Link
          href="/clock"
          className="rounded text-blue-800 hover:bg-blue-100 text-2xl"
        >
          1.) Live clock
        </Link>
        <Link
          href="/counteven"
          className="rounded text-blue-800 hover:bg-blue-100 text-2xl"
        >
          2.) Count Even Numbers
        </Link>
        <Link
          href="/countnegative"
          className="rounded text-blue-800 hover:bg-blue-100 text-2xl"
        >
          3.) Count Negative Numbers
        </Link>
      </div>
    </div>
  );
}
