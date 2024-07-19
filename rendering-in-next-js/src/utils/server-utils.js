import "server-only"

// this function called only on server , if you importing it to client side then it gives you an error.
export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        intract with database,
        process confidential information`
    )

    return "server result"
}