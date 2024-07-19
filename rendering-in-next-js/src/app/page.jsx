// "use client"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-10">
      <h1 className="font-bold text-4xl shadow-lg">
        Server component
        <span className="text-blue-400 text-2xl"> and </span>
        Client component
      </h1>

      <Link
        href={"/about"}
        className="border border-gray-400 cursor-pointer p-3 bg-blue-200 font-bold"
      >
        See server component
      </Link>
      <Link
        href={"/contact"}
        className="border border-gray-400 cursor-pointer p-3 bg-blue-200 font-bold"
      >
        See client component
      </Link>

      <h1>TIME - {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
