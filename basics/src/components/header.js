import Link from "next/link";

export default function Header() {
    return <header style={{
        backgroundColor: "lightblue",
        padding: "1rem",
    }}>
        <div>
            <Link href={"/"}>Go to Home</Link>
        </div>
        <h1>This is header</h1>
    </header>
}