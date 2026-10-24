// imports
import { useNavigate } from "react-router";
import SVG from "./SVG";
import DATA from '../../data'
import { useContext } from "react";
import Context from "../../context/ContextInit";

// news card
const NewsCard = ({ icons, news, isLast, size, isReadLater, isAvailOffline,NotesPresent }) => {
    // hook init
    const nav = useNavigate();
    const { setCurrentArtcle } = useContext(Context);
    return (
        <>
            <div className={`flex items-start space-x-5 cursor-pointer ${isLast ? size === "xs" ? "mb-4" : "mb-7" : ""}`} onClick={() => { nav(`/article/${news.id}`); setCurrentArtcle(news) }}>


                {/* image  */}
                <div className={`w-full aspect-3/2 overflow-hidden ${size === "xs" ? "h-22" : ""}`} style={{ maxWidth: size === "s" ? "7.5rem" : size === "xs" ? "7rem" : "10rem" }}>
                    <img src={news.fields.thumbnail} alt="image" className="w-full hover:scale-[1.02] transition-transform duration-300 h-full" />
                </div>

                <div className="space-y-1.5 cursor-pointer" >


                    {/* topic */}
                    <p className="uppercase text-xs font-medium tracking-widest text-gray-400">{news.sectionName}</p>
                    {/*  title */}
                    <p className={`font-display text-gray-900 hover:text-gray-600 font-semibold ${size === "xs" ? "" : "text-lg"}`}>{size === "xs" ? news.webTitle.slice(0, 55) + " ..." : news.webTitle}</p>
                    {/* desc */}
                    <p className={`text-sm text-gray-500 ${size === "xs" || size === "s" ? "hidden" : ""}`}>{news.fields?.trailText.length > 147 ? news.fields?.trailText.slice(0, 147) + " ..." : news.fields?.trailText + "."}</p>


                    {/* bottom section */}
                    <div className="flex justify-between items-center">

                        {/* source and date */}
                        <div className={`flex justify-between items-center text-xs space-x-7 ${size === "xs" ? "flex-col space-x-0 items-start space-y-1" : ""}`}>
                            <p className="text-xs text-gray-400">{news.fields?.byline.slice(0, 14)} {news.fields?.byline.length > 14 ? "..." : ""}
                            </p>
                            <p className="text-gray-400">
                                {new Date(news.webPublicationDate).toLocaleDateString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>

                        {/* info icons */}
                        <div className={`flex justify-between items-center text-gray-400 space-x-3 ${!icons ? "hidden" : ""}`}>
                            {isReadLater?<SVG
                                d={DATA.D_Val_Action.bookmark}
                                className={"size-5"}
                                {...DATA.SVG_PROPS}
                                fill={"#99a1af"}
                            />:""
                            }
                            {isAvailOffline?<SVG
                                d={DATA.D_Val_Action.download}
                                className={"size-5.5"}
                                {...DATA.SVG_PROPS}
                            />:""
                            }
                            {NotesPresent?<SVG
                                d={DATA.D_Val_Action.notes}
                                className={"size-5.5"}
                                {...DATA.SVG_PROPS}
                            />:""}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={isLast || size === "s" ? "hidden" : `border border-gray-200 ${size === "xs" ? "my-4" : "my-7"}`} />
        </>
    )
}


export default NewsCard

