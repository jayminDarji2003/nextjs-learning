import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to Food Recipe Application</h1>
      <Link href={'/recipe-list'}>Explore Food Recipes</Link>
    </div>
  );
}
