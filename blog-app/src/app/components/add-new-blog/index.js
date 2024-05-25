"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
  hangleBlogFormData,
}) {
  return (
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
                  name="title"
                  id="title"
                  placeholder="Enter blog title"
                  value={blogFormData.title}
                  className="col-span-3"
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      title: event.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description :
                </Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={blogFormData.description}
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      description: event.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={hangleBlogFormData} type="button">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
