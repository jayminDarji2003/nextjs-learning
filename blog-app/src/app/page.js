import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-green-300 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3"> 
        <h2 className="text-2xl font-bold ">Browse our blog collections</h2>
        <Link className="border-2 p-2 border-blue-400 rounded-lg font-semibold" href={'blogs'}>Explore blogs</Link>
      </div>
    </div>
  );
}
