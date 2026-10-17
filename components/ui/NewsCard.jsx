// imports
import { D_Val } from "../../data"


// news card
const NewsCard = ({ icons, news, isLast, size }) => {
    const classname = [
        "text-xs font-medium text-gray-400 uppercase tracking-widest",
        "font-display text-lg text-gray-900 hover:text-gray-600 font-semibold",
        "text-gray-500 text-sm"
    ]

    const sANDxs=size === "s" || size === "xs";

    return (
        <div className={`flex items-start ${isLast || sANDxs ? "" : "border-b border-gray-200"} pb-5 space-x-5 cursor-pointer ${sANDxs ? "mb-0" : "mb-7"}`}>
            {/* image */}
            <div className={"w-full aspect-3/2 overflow-hidden"} style={{ maxWidth: size === "s" ? "7.5rem" : size === "xs" ? "" : "12rem" }}>
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
                    [news.category, news.title, sANDxs ? null : news.summary].map((val, pos) => {
                        return <p className={classname[pos]} key={pos}>{val}</p>
                    })
                }
                {/* bottom section */}
                <div className="flex justify-between items-center">
                    {/* source and date */}
                    <div className="flex justify-between items-center text-xs space-x-7">
                        {
                            [news.source, news.date].map((val, pos) => {
                                return <p className="text-gray-400" key={pos}>{val}</p>
                            })
                        }
                    </div>
                    {/* cta icons */}
                    <div className={`flex justify-between items-center space-x-3 ${!icons ? "hidden" : ""}`}>
                        {
                            news.actions.map((news, pos) => {
                                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#99a1af" className="size-5" key={pos}>
                                    <path fillRule="evenodd" d={D_Val[news]} clipRule="evenodd" />
                                </svg>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard