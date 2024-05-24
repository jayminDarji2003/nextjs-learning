"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

// fetching the data inside client component
// useEffect
// swr, swr hook
// with loading state

export default function ClientSideDataFetch() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function getAllUserData() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();

            if (result?.users) {
                setUsers(result?.users);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllUserData()
    }, [])

    if(loading) return <h1 className="font-bold text-xl">Loading user data!!</h1>

    return <div className="m-10">
        <h1>Users </h1>
         {
            users && users.length > 0 ?
            users.map(user => <li key={user.id} className="to-blue-300 my-2">
                        <Link href={`server-data-fetch/${user.id}`}>{user.firstName}</Link>
                    </li>)
                    : null
            }
    </div>
}