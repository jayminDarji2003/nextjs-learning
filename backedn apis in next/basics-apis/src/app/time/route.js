export const dynamic = "force-dynamic";  // by default caching is auto

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}