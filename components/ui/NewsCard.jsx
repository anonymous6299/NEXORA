// imports
import { useNavigate } from "react-router";
import SVG from "./SVG";
import DATA from '../../data'

// news card
const NewsCard = ({ icons, news, isLast, size }) => {


    // hook init
    const nav = useNavigate();
    return (
        <>
            <div className={`space-y-2.5 cursor-pointer ${isLast ? size === "xs" ? "mb-4" : "mb-7" : ""}`} onClick={() => { nav(`/article/${news.uuid}`) }}>

                {/*  title */}
                <p className={`font-display text-gray-900 hover:text-gray-600 font-semibold ${size === "xs" ? "" : "text-lg"}`}>{news.title}</p>

                {/* bottom section */}
                <div className="flex justify-between items-center">

                    {/* source and date */}
                    <div className={`flex justify-between items-center text-xs space-x-7 ${size === "xs" ? "flex-col space-x-0 items-start space-y-1" : ""}`}>
                        <p className="text-black/50 font-semibold uppercase tracking-wider">{news.publisher}</p>
                        <p className="text-gray-400">{news.published_at?.slice(8, 10)} {DATA.MONTHS[Number.parseInt(news.published_at?.slice(5, 7))]} {news.published_at?.slice(0, 4)}</p>
                    </div>

                    {/* info icons */}
                    <div className={`flex justify-between items-center text-gray-400 space-x-3 ${!icons ? "hidden" : ""}`}>
                        {
                            news.actions.map((ele, pos) => {
                                return <SVG
                                    d={DATA.D_Val_Action[ele]}
                                    className={ele === "download" ? "size-6" : "size-5.5"}
                                    {...DATA.SVG_PROPS}
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

