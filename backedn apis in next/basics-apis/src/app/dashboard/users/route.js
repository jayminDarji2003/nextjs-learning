import { cookies } from "next/headers";

export async function GET() {

    // set cookies
    cookies().set("theme", "dark");

    // get cookies
    const theme = cookies().get("theme");
    console.log(theme)

    console.log(cookies().getAll())

    return new Response("user");
}