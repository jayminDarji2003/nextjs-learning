// fetching the data inside server component
// fetch

async function getAllUsers() {
    try {
        const aipResponse = await fetch('https://dummyjson.com/users');
        const result = await aipResponse.json();

        return result.users;
    } catch (error) {
        throw new Error(error.message);
    }
}


export default async function SearverSideDataFetch() {

    const allUsers = await getAllUsers();
    console.log(allUsers);

    return <div>
        <h1>Server side data fetching!!</h1>
    </div>
}