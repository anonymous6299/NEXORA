// imports
import { useContext, useEffect, useState } from "react"
import DATA from "../../data"
import CommonHeader from "../ui/CommonHeader"
import HomeHeader from "../ui/HomeHeader"
import NewsCard from "../ui/NewsCard"
import { NewsCardLoading, NewsError, RecommendationError } from "../ui/NewsLoadErr"
import Pagination from "../ui/Pagination"
import Context from "../../context/ContextInit"
import checkAvailability from "../logic/CheckAvailbility"
import { fetchNotes } from "../logic/Notes"


// latest news
const LatestNews = ({ ARTICLES }) => {
    // context consumption
    const { RL_ARTICLES, OFFLINE_ARTICLES } = useContext(Context);

    return (
        <div className="w-full">
            <CommonHeader
                title={"latest news"}
                hr={false}
                length={DATA.news.response.results.length}
            />
            <div className="mt-5">
                {
                    ARTICLES.map((ele, pos) => {
                        return <NewsCard
                            news={ele}
                            key={pos}
                            isLast={((pos+1)%5===0)||(pos + 1 === ARTICLES.length)}
                            icons={true}
                            isReadLater={checkAvailability(RL_ARTICLES, ele.id)}
                            isAvailOffline={checkAvailability(OFFLINE_ARTICLES, ele.id)}
                            NotesPresent={fetchNotes(ele.id).length !== 0}
                        />
                    })
                }
            </div>
            {/* <NewsCardLoading n={4}/> */}
            {/* <NewsError/> */}
        </div>
    )
}






// recommended news
const RecommendedNews = ({ ARTICLES }) => {
    const { RL_ARTICLES, OFFLINE_ARTICLES } = useContext(Context);
    return (
        <div className="w-1/2">
            <CommonHeader
                title={"recommended"}
                articles={false}
            />
            <div className="mt-5">
                {
                    ARTICLES.length !== 0 ? ARTICLES.map((ele, pos) => {
                        return <NewsCard
                            news={ele}
                            size={"xs"}
                            icons={true}
                            key={pos}
                            // isLast={pos + 1 === DATA.news.response.results.length}
                            isReadLater={checkAvailability(RL_ARTICLES, ele.id)}
                            isAvailOffline={checkAvailability(OFFLINE_ARTICLES, ele.id)}
                            NotesPresent={fetchNotes(ele.id).length !== 0}
                        />
                    }) : <p className="text-sm text-gray-400">No recommendations found yet.</p>
                }
            </div>
            {/* <NewsCardLoading n={4}/> */}
            {/* <RecommendationError/> */}
        </div>
    )
}





const Home = () => {
    const [CurrentPagination, setCurrentPagination] = useState(0);
    const [ThisArticles, setThisArticles] = useState(DATA.news.response.results.slice(0, 5));

    useEffect(() => {
        const change = 5 * CurrentPagination;
        if ((5 + change) > DATA.news.response.results.length) {
            setThisArticles(DATA.news.response.results.slice(change, DATA.news.response.results.length))
        } else {
            setThisArticles(DATA.news.response.results.slice(0 + change, 5 + change))
        }
    }, [CurrentPagination])

    return (
        <div className="px-40">
            {/* top filters section */}
            <HomeHeader />

            {/* middle section */}
            <div className="flex justify-between items-start space-x-20 border-b border-gray-200 min-h-135">
                <LatestNews ARTICLES={ThisArticles} />
                <RecommendedNews ARTICLES={DATA.news.response.results.slice(0,6)} />
            </div>

            {/* bottom pagination */}
            <Pagination
                display={true}
                ArtLen={DATA.news.response.results.length}
                CurrentPgtn={CurrentPagination}
                setCurrentPgtn={setCurrentPagination}
            />
        </div>
    )
}

export default Home