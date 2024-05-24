// this is the loading file

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="bg-blue-200 w-screen h-screen flex justify-center items-center">
            <h1 className="text-xl">Loading, Please wait!!</h1>
            <Skeleton />
        </div>
    )
}