// imports
import { useNavigate } from "react-router";
import SVG from "./SVG";
import DATA from '../../data'
import { useContext } from "react";
import Context from "../../context/ContextInit";
import { IncreaseData } from "../logic/Recommendations";

// news card
const NewsCard = ({className, icons, news, isLast, size, isReadLater, isAvailOffline, NotesPresent,isRecommended }) => {
    // hook init
    const nav = useNavigate();
    const { setCurrentArtcle } = useContext(Context);
    return (
        <>
            <div className={`${className??""} flex items-start space-x-5 cursor-pointer ${isLast ? size === "xs" ? "mb-4" : "mb-7" : ""}`} onClick={() => { nav(`/article/${news.id}`); setCurrentArtcle(news); IncreaseData(news.sectionName.toLowerCase()) }}>


                {/* image  */}
                <div className={`w-full aspect-3/2 overflow-hidden ${size === "xs" ? "h-22" : ""}`} style={{ maxWidth: size === "s" ? "7.5rem" : size === "xs" ? "7rem" : "10rem" }}>
                    <img src={news?.fields?.thumbnail} alt="image" className="w-full hover:scale-[1.02] transition-transform duration-300 h-full" />
                </div>

                <div className="space-y-1.5 cursor-pointer" >


                    {/* topic */}
                    <div className="flex items-center space-x-2">
                        <p className="uppercase text-xs font-medium tracking-widest text-gray-400">
                            {news?.sectionName}</p>
                        <div className={`border-l-2 border-black bg-gray-100 flex items-center w-fit space-x-2 px-2 ${icons && isRecommended?"":"hidden"}`}>
                            <SVG
                                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                className={"size-3.5"}
                                {...DATA.SVG_PROPS}
                            />
                            <p className="text-[10px] uppercase font-medium py-1 text-gray-600 w-fit">for you</p>
                        </div>
                    </div>
                    {/*  title */}
                    <p className={`font-display text-gray-900 hover:text-gray-600 font-semibold ${size === "xs" ? "" : "text-lg"}`}>{size === "xs" ? news?.webTitle.slice(0, 55) + " ..." : news?.webTitle}</p>
                    {/* desc */}
                    <p className={`text-sm text-gray-500 ${size === "xs" || size === "s" ? "hidden" : ""}`}>{news?.fields?.trailText?.length > 147 ? news?.fields?.trailText?.slice(0, 147) + " ..." : news?.fields?.trailText + "."}</p>


                    {/* bottom section */}
                    <div className={`flex justify-between items-center ${icons?"w-215":""}`}>

                        {/* source and date */}
                        <div className={`flex justify-between items-center text-xs space-x-7 ${size === "xs" ? "flex-col space-x-0 items-start space-y-1" : ""}`}>
                            <p className="text-xs text-gray-400">
                                {news?.fields?.byline}
                            </p>
                            <p className="text-gray-400">
                                {new Date(news?.webPublicationDate).toLocaleDateString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>

                        {/* info icons */}
                        <div className={`flex justify-between items-center text-gray-400 space-x-3 ${!icons ? "hidden" : ""}`}>
                            {isReadLater ? <SVG
                                d={DATA.D_Val_Action.bookmark}
                                className={"size-5"}
                                {...DATA.SVG_PROPS}
                                fill={"#99a1af"}
                            /> : ""
                            }
                            {isAvailOffline ? <SVG
                                d={DATA.D_Val_Action.download}
                                className={"size-5.5"}
                                {...DATA.SVG_PROPS}
                            /> : ""
                            }
                            {NotesPresent ? <SVG
                                d={DATA.D_Val_Action.notes}
                                className={"size-5.5"}
                                {...DATA.SVG_PROPS}
                            /> : ""}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={isLast || size === "s" ? "hidden" : `border-t border-gray-200 ${size === "xs" ? "my-4" : "my-7"}`} />
        </>
    )
}


export default NewsCard

