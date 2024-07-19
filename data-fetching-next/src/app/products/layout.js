function productLayout({ children }) {
    return (
        <div>

            <div className="flex justify-center bg-black">
                <h1 className="text-center font-bold text-white text-3xl p-3 py-5">Product Page</h1>
            </div>

            {children}
        </div>
    )
}

export default productLayout
