import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
      <Link href="/" className="text-white font-extrabold">
        JdCoding
      </Link>
      <Link href="/addTopic" className="bg-white px-4 py-2 font-bold">
        Add
      </Link>
    </nav>
  );
}

export default Navbar;
