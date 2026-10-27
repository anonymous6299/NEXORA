// imports
import SVG from "./SVG"
import DATA from "../../data"


// displayed when news in any section is loading
const NewsCardLoading = ({ n, display }) => {
    return <div className={`space-y-5 ${display?"":"hidden"}`}>
        {
            Array.from({ length: n }).map((ele, pos) => {
                return <div className="space-y-2.5 border-b border-gray-100 pb-5 animate-pulse" key={pos}>
                    {
                        ["w-20", "w-full", "w-3/4", "w-1/3"].map((ele, pos) => {
                            return <div className={`bg-gray-100 h-4 ${ele}`} key={pos}></div>
                        })
                    }
                </div>
            })
        }
    </div>
}

// displayed when news gives error
const NewsError = ({ DISPLAY, retry }) => {
    return (
        <div className={`w-fit mx-auto ${DISPLAY ? "flex flex-col" : "hidden"} items-center space-y-5 mt-28`}>
            <SVG className={"size-10 text-[#9ca3af]"} d={"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"} {...DATA.SVG_PROPS} />
            <div className="text-center space-y-2 w-80">
                <p className=" text-sm font-medium text-gray-800">Unable to load content</p>
                <p className="text-xs text-gray-400">We could not reach the server. Check your connection and try again.</p>
            </div>
            <button className="text-sm border border-gray-300 hover:border-gray-500 transition-colors px-4 py-2 cursor-pointer" onClick={retry}>Retry</button>
        </div>
    )
}

// displayed when recommendations give error
const RecommendationError = () => {
    return (
        <div className="w-fit mx-auto flex flex-col items-center space-y-5 mt-28 ">
            <SVG className={"size-10 text-[#d1d5db]"} d={"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"} {...DATA.SVG_PROPS} />
            <div className="text-center space-y-2 w-80 text-xs">
                <p className="font-medium text-gray-800">Recommendations unavailable</p>
                <p className="text-gray-400">Server did not respond. Please try again.</p>
            </div>
            <button className="text-xs border border-gray-300 hover:border-gray-500 transition-colors px-3 py-1.5 cursor-pointer">Retry</button>
        </div>
    )
}



export { NewsCardLoading, NewsError }