import Link from "next/link";

export default function NotFound() {
    return <div>
        <h1>This page is not exist!!</h1>
        <Link href={'/'}>Go to home page</Link>
    </div>
}