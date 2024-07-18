import { comments } from "./data"

// GET request handler
// GET : http://localhost:3000/comments
// to get all comments
export async function GET() {
    return Response.json(comments)
}

// GET comment that comtains the Query params text
// GET : http://localhost:3000/comments?query=first
// in above url the first is the text
// export async function GET(request) {
//     // const { searchParams } = new URL(request.url);
//     // or
//     const searchParams = request.nextUrl.searchParams;
//     const text = searchParams.get('query');
//     // console.log("data => ", text)

//     // filter comments by text
//     const filteredComments = comments.filter((comment) => comment.text.includes(text));

//     if (filteredComments.length === 0) {
//         return Response.json({
//             message: 'No comments found'
//         })
//     }

//     return Response.json(filteredComments)
// }

// POST request handler
// POST : http://localhost:3000/comments 
/* 
body : 
    {
        "text" : "Very greate experience for this webinar"
    }
*/
export async function POST(request) {
    // every post request have this "request" object

    const data = await request.json();   // get the json data 
    console.log("REQUEST BODY => ", data)

    // creating new comment object
    const newComment = {
        id: comments.length + 1,
        text: data.text
    }

    // push to comments object
    comments.push(newComment)

    // sending the response
    return Response.json(
        {
            message: "comment added successfully",
            newComment
        },
        {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
}   