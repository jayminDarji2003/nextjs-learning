import Link from "next/link";
import React from "react";

function AboutPage() {
  console.log("server component");
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-10 text-4xl font-bold">
      About page - server component
      <Link
        href={"/"}
        className="text-xl border border-gray-400 bg-orange-300 p-2"
      >
        Go Back
      </Link>
    </div>
  );
}

export default AboutPage;
