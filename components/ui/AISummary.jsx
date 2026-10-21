// will be rendered when ai summary is requested

const AISummary = () => {
    return (
        <div className="border border-gray-200 bg-gray-50 my-10 p-5 space-y-4">
            {/* header */}
            <div className="flex space-x-4 items-center">
                <div className="bg-black text-white font-semibold w-fit text-xs py-2 px-3">AI</div>
                <div>
                    <p className="uppercase text-sm font-semibold tracking-widest">summary/generating summary</p>
                    <p className="text-xs text-gray-400">A quick overview of this story/Reading and condensing this story</p>
                </div>
            </div>

            {/* loading or text */}
            <div>
                <div className="space-y-3 animate-pulse">
                    <div className="bg-gray-300 w-full h-3"></div>
                    <div className="bg-gray-300 h-3 w-11/12"></div>
                    <div className="bg-gray-300 h-3 w-4/5"></div>
                </div>
                <p className="text-gray-700">World leaders convene in Geneva to finalize landmark regulations governing artificial intelligence development across 142 nations.</p>
            </div>


            {/* bottom desc */}
            <p className="text-xs text-gray-400 border-t border-gray-200 pt-3">AI-generated summaries may miss context. Read the full article below for complete details.</p>
        </div>
    )
}

export default AISummary