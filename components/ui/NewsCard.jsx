// imports
import { D_Val } from "../../data"
import SVG from "./SVG";


// news card
const NewsCard = ({ icons, news, isLast, size }) => {
    const classname = [
        "text-xs font-medium text-gray-400 uppercase tracking-widest",
        `font-display text-gray-900 hover:text-gray-600 font-semibold ${size==="xs"?"":"text-lg"}`,
        "text-gray-500 text-sm"
    ]


    // common svg props
    const props = {
        SVGOthers: { fill: "#99a1af" },
        PathOthers: { strokeLinecap: "round", strokeLinejoin: "round" }
    }

    return (
        <div className={`flex items-start ${isLast || size==="s" ? "" : "border-b border-gray-200"} pb-5 space-x-5 cursor-pointer ${size==="s" ? "mb-0" : "mb-7"}`}>
            {/* image */}
            <div className={"w-full aspect-3/2 overflow-hidden"} style={{ maxWidth: size === "s" ? "7.5rem" : size === "xs" ? "7rem" : "12rem" }}>
                <img
                    src={news.image}
                    alt="img"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform"
                />
            </div>
            {/* right side content */}
            <div className="space-y-2.5">
                {/* category, title and summary */}
                {
                    [news.category, news.title, size==="s" || size==="xs" ? null : news.summary].map((val, pos) => {
                        return <p className={classname[pos]} key={pos}>{val}</p>
                    })
                }
                {/* bottom section */}
                <div className="flex justify-between items-center">
                    {/* source and date */}
                    <div className={`flex justify-between items-center text-xs space-x-7 ${size==="xs"?"flex-col space-x-0 items-start space-y-1":""}`}>
                        {
                            [news.source, news.date].map((val, pos) => {
                                return <p className="text-gray-400" key={pos}>{val}</p>
                            })
                        }
                    </div>
                    {/* cta icons */}
                    <div className={`flex justify-between items-center space-x-3 ${!icons ? "hidden" : ""}`}>
                        {
                            news.actions.map((ele, pos) => {
                                return <SVG
                                    d={D_Val[ele]}
                                    className="size-5"
                                    {...(ele==="notes"?{...props.PathOthers,SVGOthers:{fill:"none",strokeWidth:1.8, stroke:"#99a1af"}}:props)}
                                    key={pos}
                                />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsCard
