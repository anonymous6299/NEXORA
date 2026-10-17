

import SVG from "./SVG"

// pagination for notes section in saved pages
const Notes_Article_Pgtn = () => {
    // common props
    const props = {
        SVGOthers: {
            className: "size-6",
            strokeWidth: 1.5,
            stroke: "currentColor",
            fill:"none"
        },
        PathOthers: {
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }
    }

    return (
        <div>
            <SVG
                className={"size-6"}
                d={"M15.75 19.5 8.25 12l7.5-7.5"}
                {...props}
            />

            <p>Article 1 of n</p>
            <SVG
                className={"size-6"}
                d={"m8.25 4.5 7.5 7.5-7.5 7.5"}
                {...props}
            />

        </div>
    )
}

export { Notes_Article_Pgtn }



