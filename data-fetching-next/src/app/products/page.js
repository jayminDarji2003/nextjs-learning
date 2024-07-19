async function ProductPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000))


    console.log("product page rendered")
    const response = await fetch("http://localhost:3001/products", {
        cache: "no-store"
    });
    const products = await response.json();
    console.log(products.length)
    return (
        <>
            <div className="flex gap-3 bg-blue-200 justify-center flex-wrap">

                {products.map((product) => (
                    <div className=" max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white" key={product.id}>
                        <img className="w-full" src={product.thumbnail} alt={product.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.title}</div>
                            <p className="text-gray-700 text-base mb-2">{product.description}</p>
                            <p className="text-gray-700 text-sm mb-2">Category: {product.category}</p>
                            <p className="text-gray-700 text-sm mb-2">Brand: {product.brand}</p>
                            <p className="text-gray-700 text-sm mb-2">SKU: {product.sku}</p>
                            <p className="text-gray-700 text-sm mb-2">Weight: {product.weight} g</p>
                            <p className="text-gray-700 text-sm mb-2">
                                Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} mm
                            </p>
                            <p className="text-gray-700 text-sm mb-2">Warranty: {product.warrantyInformation}</p>
                            <p className="text-gray-700 text-sm mb-2">Shipping: {product.shippingInformation}</p>
                            <p className="text-gray-700 text-sm mb-2">Availability: {product.availabilityStatus}</p>
                            <p className="text-gray-700 text-sm mb-2">Return Policy: {product.returnPolicy}</p>
                            <p className="text-gray-700 text-sm mb-2">Minimum Order Quantity: {product.minimumOrderQuantity}</p>
                            <p className="text-gray-700 text-sm mb-2">Created At: {new Date(product.meta.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-700 text-sm mb-2">Updated At: {new Date(product.meta.updatedAt).toLocaleDateString()}</p>
                            <p className="text-gray-700 text-sm mb-2">Barcode: {product.meta.barcode}</p>
                            <img className="w-16 h-16" src={product.meta.qrCode} alt="QR Code" />
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {product.tags.map(tag => (
                                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                ${product.price}
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Rating: {product.rating}
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Discount: {product.discountPercentage}%
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Stock: {product.stock}
                            </span>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <h3 className="font-bold text-lg mb-2">Reviews:</h3>
                            {product.reviews.map(review => (
                                <div key={review.reviewerEmail} className="mb-4">
                                    <p className="text-gray-700 text-sm mb-1">Rating: {review.rating}</p>
                                    <p className="text-gray-700 text-sm mb-1">Comment: {review.comment}</p>
                                    <p className="text-gray-700 text-sm mb-1">Reviewer: {review.reviewerName}</p>
                                    <p className="text-gray-700 text-sm">Date: {new Date(review.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default ProductPage
