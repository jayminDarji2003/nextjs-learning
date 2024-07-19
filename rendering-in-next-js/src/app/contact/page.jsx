"use client";

import Link from "next/link";
import React from "react";

function ContactPage() {
  console.log("client component");
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-10 text-4xl font-bold">
      contact page - client component
      <Link
        href={"/"}
        className="text-xl border border-gray-400 bg-orange-300 p-2"
      >
        Go Back
      </Link>
    </div>
  );
}

export default ContactPage;
