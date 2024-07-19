// fetching data in server component

async function UserPage() {
    // here we are just adding setTimeout to wait for 2 minutes
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // fetching data
    const resposne = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resposne.json();
    // console.log(users);

    return (
        <div className="grid grid-cols-2 gap-2 p-4">
            {users.map((user) => (
                <div
                    key={user?.id}
                    className="flex justify-between items-center p-2 bg-white shadow rounded-lg text-gray-500">

                    <div className="flex flex-col space-y-1">
                        <h2 className="text-lg font-semibold">{user?.name}</h2>
                        <p className="text-sm">{user?.username}</p>
                    </div>

                    <div className="flex flex-col space-y-1 items-end">
                        <div className="text-lg">{user?.email}</div>
                        <div className="text-lg">{user?.phone}</div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default UserPage
