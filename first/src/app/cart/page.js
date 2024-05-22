'use client'

import { useParams, usePathname, useSearchParams } from "next/navigation"

export default function cart() {

    const pathName = usePathname();
    console.log(pathName);
    const searchParams = useSearchParams();
    console.log(searchParams.get("search"));

    return <h1>cart</h1>
}