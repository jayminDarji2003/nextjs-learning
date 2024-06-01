import Link from "next/link";

export default function Product() {
    return <div>
        <h1>Product list page.</h1>
        <p>
            <Link href={"/product/1"}>Product 1</Link>
        </p>

        <p>
            <Link href={"/product/2"}>Product 2</Link>
        </p>

        <p>
            <Link href={"/product/3"}>Product 3</Link>
        </p>
    </div>
}