import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col gap-5">
        <Link href={"/users"} className="border border-gray-400 p-2 bg-orange-300 mx-4">Go to users page</Link>
        <Link href={"/products"} className="border border-gray-400 p-2 bg-orange-300 mx-4">Go to products page</Link>
      </div>
    </>
  )
}
