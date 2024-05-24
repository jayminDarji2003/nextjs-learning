// this is the loading file

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="red-400">
            <h1>This page is not found!!</h1>
            <Link href={'/'}>Go to Home</Link>
        </div>
    )
}