// will be displayed when article content is being fetched in /article page

const ArticleLoading = ({DISPLAY}) => {
    return (
        <>

            {/* left side content loading */}
            <div className={`w-[65%] animate-pulse ${DISPLAY?"":"hidden"}`}>
                <div className="h-2.5 w-28 bg-gray-300 mb-4"></div>
                <div className="mb-6 space-y-3">
                    {
                        Array.from({ length: 2 }).map((ele, pos) => {
                            return <div className="h-8 w-full bg-gray-300 mb-4" key={pos}></div>
                        })
                    }
                </div>
                <div className="flex space-x-5 items-center mb-6">
                    {
                        Array.from({ length: 2 }).map((ele, pos) => {
                            return <div className="h-3 w-32 bg-gray-200 mb-4" key={pos}></div>
                        })
                    }
                </div>
                <div className="space-x-2 flex w-3/5 mb-6">
                    {
                        Array.from({ length: 3 }).map((ele, pos) => {
                            return <div className="h-8 w-full bg-gray-300 mb-4" key={pos}></div>
                        })
                    }
                </div>
                <div className="bg-gray-200 aspect-video mb-8"></div>
                <div className="space-y-10">
                    <div className="space-y-3">
                        {
                            ["w-full","w-full","w-11/12","w-4/5"].map((ele,pos)=>{
                                return <div className={`bg-gray-200 h-3 ${ele}`} key={pos}></div>
                            })
                        }
                    </div>

                    <div className="space-y-3">
                        {
                            ["w-full","w-10/12","w-3/4"].map((ele,pos)=>{
                                return <div className={`bg-gray-200 h-3 ${ele}`} key={pos}></div>
                            })
                        }
                    </div>
                </div>
            </div>


            {/* right side content loading */}
            <div className={`w-76 animate-pulse ${DISPLAY?"":"hidden"}`}>
                <div className="h-2.5 w-28 bg-gray-300 mb-5"></div>
                <div className="space-y-3 mb-5">
                    {
                        Array.from({ length: 2 }).map((ele, pos) => {
                            return <div className="h-16 bg-gray-200" key={pos}></div>
                        })
                    }
                </div>
                <div className="h-24 w-full bg-gray-100"></div>
            </div>
        </>
    )
}

export default ArticleLoading