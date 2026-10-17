

import SVG from "./SVG"

// pagination for notes section in saved pages
const Notes_Article_Pgtn = () => {
    // common props
    const props = {
        SVGOthers: {
            className: "size-4",
            strokeWidth: 2,
            stroke: "currentColor",
            fill: "none"
        },
        PathOthers: {
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }
    }

    const btnClass = "p-1.5 border border-gray-200 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
    return (
        <div className="flex justify-between items-center w-fit my-5 space-x-4">

            {/* prev */}
            <button className={btnClass}>
                <SVG
                    d={"M15.75 19.5 8.25 12l7.5-7.5"}
                    {...props}
                />
            </button>

            {/* description text */}
            <p className="text-sm text-gray-500">Article 1 of n</p>

            {/* next */}
            <button className={btnClass}>
                <SVG
                    d={"m8.25 4.5 7.5 7.5-7.5 7.5"}
                    {...props}
                />
            </button>

        </div>
    )
}

export { Notes_Article_Pgtn }



