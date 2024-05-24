import Link from "next/link";

async function getUserDetails(id) {
    console.log(id);
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const result = await response.json();
        return result;
        // console.log(result);
    } catch (e) {
        throw new Error(e);
    }
}


export default async function UserDetails({ params }) {
    const userDetails = await getUserDetails(params.details);
    // console.log(userDetails);
    return <>
        <Link className="m-3 bg-blue-400 text-white p-3" href={'/server-data-fetch'}> Back</Link>
        <div className="m-10 font-bold">
            <h1>This is user details page!!</h1>
            <div>
                <li>{userDetails?.id}</li>
                <li>{userDetails?.firstName}</li>
                <li>{userDetails?.age}</li>
                <li>{userDetails?.gender}</li>
                <li>{userDetails?.email}</li>
                <li>{userDetails?.phone}</li>
            </div>

        </div>
    </>
}

