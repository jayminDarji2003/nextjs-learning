export default function Docs({ params }) {
    // console.log("PARAMS => ", params)

    if (params.slug?.length === 2) {
        return <div>
            <h1>Feature : {params.slug[0]}</h1>
            <h1>Concept : {params.slug[1]}</h1>
        </div>
    } else if (params.slug?.length === 1) {
        return <div>
            <h1>Feature : {params.slug[0]}</h1>
        </div>
    }
    return <div>
        <h1>This is docs page</h1>
    </div>
}
