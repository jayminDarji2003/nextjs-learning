'use client'

import { useState } from "react"
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
    title: '',
    description: ''
}

export default function BlogOverview() {
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData)

    async function hangleBlogFormData() {
        try {
            const apiResponse = await fetch("/api/add-blog", {
                method: 'POST',
                body: JSON.stringify(blogFormData)
            })

            const result = await apiResponse.json();
            console.log(result);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            setBlogFormData(initialBlogFormData)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-green-300 p-5">
            <div>
                <AddNewBlog
                    openBlogDialog={openBlogDialog}
                    setOpenBlogDialog={setOpenBlogDialog}
                    loading={loading}
                    setLoading={setLoading}
                    blogFormData={blogFormData}
                    setBlogFormData={setBlogFormData}
                    hangleBlogFormData={hangleBlogFormData}
                />
            </div>

            <div>

            </div>
        </div>
    )
}