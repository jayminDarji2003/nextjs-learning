 "use client"
import { useRouter } from "next/navigation"

export default function ProductDetails({ params }) {
    const router = useRouter();

    const handleClick = () => {
        console.log("placed order");
        router.push("/");
    }

    return <div>
        <h1>Product details page : {params.productId}</h1>
        <button onClick={handleClick}>Place order</button>
    </div>
}