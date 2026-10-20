// imports
import { D_Val } from "../../data"
import SVG from "./SVG";


// news card
const NewsCard = ({ icons, news, isLast, size }) => {
    const classname = [
        `font-display text-gray-900 hover:text-gray-600 font-semibold ${size === "xs" ? "" : "text-lg"}`,
        "text-gray-500 text-sm"
    ]


    // common svg props
    const props = {
        SVGOthers: { fill: "#99a1af" },
        PathOthers: { strokeLinecap: "round", strokeLinejoin: "round" }
    }

    // months data
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <>
            <div className={`space-y-2.5 cursor-pointer ${isLast?size === "xs"?"mb-4":"mb-7":""}`}>
                {/*  title */}
                <p className={`font-display text-gray-900 hover:text-gray-600 font-semibold ${size === "xs" ? "" : "text-lg"}`}>{news.title}</p>

                {/* bottom section */}
                <div className="flex justify-between items-center">
                    {/* source and date */}
                    <div className={`flex justify-between items-center text-xs space-x-7 ${size === "xs" ? "flex-col space-x-0 items-start space-y-1" : ""}`}>
                        <p className="text-black/50 font-semibold uppercase tracking-wider">{news.publisher}</p>
                        <p className="text-gray-400">{news.published_at?.slice(8,10)} {MONTHS[Number.parseInt(news.published_at?.slice(5, 7))]} {news.published_at?.slice(0,4)}</p>
                    </div>
                    {/* cta icons */}
                    <div className={`flex justify-between items-center space-x-3 ${!icons ? "hidden" : ""}`}>
                        {
                            news.actions.map((ele, pos) => {
                                return <SVG
                                    d={D_Val[ele]}
                                    className="size-5"
                                    {...(ele === "notes" ? { ...props.PathOthers, SVGOthers: { fill: "none", strokeWidth: 1.8, stroke: "#99a1af" } } : props)}
                                    key={pos}
                                />
                            })
                        }

                    </div>
                </div>
            </div>
            <hr className={isLast || size === "s" ? "hidden" : `border border-gray-200 ${size === "xs" ? "my-4" : "my-7"}`} />
        </>
    )
}


export default NewsCard
