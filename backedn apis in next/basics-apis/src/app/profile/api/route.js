import { cookies } from "next/headers";

export async function GET(request) {
    const requestHeaders = new Headers(request.headers);
    const authorization = requestHeaders.get('Authorization');
    console.log("BEARER TOKEN => ", authorization?.split(" ")[1]);  // you are get the token

    // set cookie
    cookies().set("token", "jaymindarji")

    // getting cookie
    const token = request.cookies.get("token");
    console.log("TOKEN => ", token)

    return new Response("Hello from profile", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer jdfhfononcojhrerehp",
            // "Set-Cookie": "token=jdfhfononcojhrerehp"
        }
    })
}