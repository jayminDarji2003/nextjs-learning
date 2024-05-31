export default function ReviewDetails({ params }) {
    console.log(params);
    return <div>
        <h1>product id : {params.productId}</h1>
        <h1>review id : {params.reviewId}</h1>
    </div>
}