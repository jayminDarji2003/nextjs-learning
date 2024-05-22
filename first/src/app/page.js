import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex justify-center flex-col items-center">
      <h1>Welcome to the next js course!!</h1>

      <h2 className="font-bold text-xl my-2">First way of routing</h2>
      <Link href={'/account'} >Go to Account page</Link>
      <Link href={'/products'} >Go to Products page</Link>

      <h2 className="font-bold text-xl my-2">Second way of routing</h2>

    </main>
  );
}
