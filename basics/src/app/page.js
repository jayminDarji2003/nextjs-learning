import Link from "next/link";

const navLinks = [
    {
        name: "Product",
        link: "/product"
    },
    {
        name: "Login",
        link: "/login"
    },
    {
        name: "Register",
        link: "/register"
    },
    {
        name: "Forgot Password",
        link: "/forgot-password"
    }
    ,
    {
        name: "Blog",
        link: "/blog"
    }
]

export default function Home() {
    return <div>
        {
            navLinks.map((link) => {
                return <div>
                    <Link href={link.link} key={link.name}>{link.name}</Link>
                </div>
            })
        }
        <h1>Hello world!</h1>
        {/* <Link href={"/blog"}>Go to blog</Link> */}
    </div>
}