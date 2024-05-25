'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function BlogOverview() {

    const [openBlogDialog, setOpenBlogDialog] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-green-300 p-5">
            <div>
                <div>
                    <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
                </div>

                <div>
                    <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
                        <DialogContent className="max-w-[350px] sm:max-w-[450px]">
                            <DialogHeader>
                                <DialogTitle>Add New Blog</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="title" className="text-right">
                                        Title : 
                                    </Label>
                                    <Input
                                        id="title"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description : 
                                    </Label>
                                    <Input
                                        id="description"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}