import { comments } from "../data"

// GET single comment request handler
// GET : http://localhost:3000/comments/4
// 4 is the id of comment, you can access by params.id
export async function GET(request, { params }) {

    // find by id
    const comment = comments.find(comment => comment.id == params.id)

    if (!comment) {
        return Response.json({
            message: "Comment not found"
        })
    }

    return Response.json({
        message: "get single comment",
        data: comment
    })
}


// PATCH request handler
// PATCH : http://localhost:3000/comments/3
// 3 is the id of comment, you can access by params.id
/* send to body

    {
        "text" : "a very new comment"
    }
*/

export async function PATCH(request, { params }) {
    // fetch the id of the comment
    const id = params?.id;

    // fetch the comment data
    const data = await request.json();
    console.log(data, id);

    const index = comments.findIndex((comment) => comment.id == id)
    comments[index].text = data.text;

    // return response
    return Response.json({
        message: "comment updated successfully",
        data: comments[index]
    })
}


// DELETE request handler
// DELETE : http://localhost:3000/comments/3
// we will delete the comment by params.id
export async function DELETE(request, { params }) {
    // fetch comment id
    const id = params?.id;

    // get the index of comment
    const index = comments.findIndex(
        (comment) => comment.id == id
    )

    // get data of deleted comment
    const deletedComment = comments[index];

    // actual delete comment
    comments.splice(index, 1);

    // return response
    return Response.json({
        message: "comment deleted successfully",
        deletedComment
    })
}