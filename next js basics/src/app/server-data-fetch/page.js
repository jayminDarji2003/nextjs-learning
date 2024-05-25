// fetching the data inside server component
// fetch

import Link from "next/link";


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
    // console.log(allUsers);

    return (
        <div className="m-10 font-bold">
            <h1>Server side data fetching : server list page</h1>
            {
                allUsers && allUsers.length > 0 ?
                    allUsers.map(user => <li className="to-blue-300 my-2">
                        <Link href={`server-data-fetch/${user.id}`}>{user.firstName}</Link>
                    </li>)
                    : null
            }
        </div>
    )
}