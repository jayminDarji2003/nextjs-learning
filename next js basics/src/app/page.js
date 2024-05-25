// client component
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  console.log(router);

  function handlerouter() {
    router.push('/products')
  }

  return (
    <main className="flex justify-center flex-col items-center my-7">
      <h1>Welcome to the next js course!!</h1>

      <h2 className="font-bold text-xl my-2">First way of routing</h2>
      <Link href={'/account'} >Go to Account page</Link>
      <Link href={'/products'} >Go to Products page</Link>

      <h2 className="font-bold text-xl my-2">Second way of routing</h2>
      <button onClick={handlerouter}>Navigate to product page using use router</button>
    </main>
  );
}
