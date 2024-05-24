import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-200 w-screen  h-screen flex justify-center items-center gap-4 flex-col">
      <h1 className="font-bold text-xl">Welcome to Food Recipe Application</h1>
      <Link className="bg-gray-400 text-white p-2 rounded-sm"  href={'/recipe-list'}>Explore Food Recipes</Link>
    </div>
  );
}
