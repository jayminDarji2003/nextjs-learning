// here we are making one functionality that if your ProfileInfo --> null then redirect to ---> profile page.

import { redirect } from "next/navigation";

export default function account() {

    // assume that profileInfo is null
    const profileInfo = null;

    if (profileInfo === null) redirect('products?search=product1')

    return <h1>account page!!</h1>
}