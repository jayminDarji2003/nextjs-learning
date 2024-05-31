import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
    console.log(params);

    if(params.reviewId > 1000){
        notFound();
    }

    return <div>
        <h1>product id : {params.productId}</h1>
        <h1>review id : {params.reviewId}</h1>
    </div>
} 