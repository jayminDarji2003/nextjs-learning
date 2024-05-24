// this is the loading file

import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div className="w-full min-h-screen">
            <h1>Loading, Please wait!!</h1>
            <Skeleton />
        </div>
    )
}