// imports
import { useContext, useEffect, useState } from "react"
import DATA from "../../data"
import CommonHeader from "../ui/CommonHeader"
import HomeHeader from "../ui/HomeHeader"
import NewsCard from "../ui/NewsCard"
import { NewsCardLoading, NewsError } from "../ui/NewsLoadErr"
import Pagination from "../ui/Pagination"
import Context from "../../context/ContextInit"
import checkAvailability from "../logic/CheckAvailbility"
import { fetchNotes } from "../logic/Notes"
import { getTopCategory } from "../logic/Recommendations"
import { SlicingLogic } from "../logic/PaginationLogic"


// latest news
const LatestNews = ({ ARTICLES }) => {
    // context consumption
    const { RL_ARTICLES, OFFLINE_ARTICLES, HomePgArt, setHomePgArt, FiltersEmpty,ApplyFilters } = useContext(Context);
    const [RecommendedCategory, setRecommendedCategory] = useState("")
    useEffect(() => {
        setRecommendedCategory(getTopCategory(JSON.parse(localStorage.getItem("recommendations_data"))))
    }, [])
    const retry = () => {
        if (FiltersEmpty) {
            // normal fetch
        } else {
            setHomePgArt(prev=>({...prev,loading:true,error:false}))
            ApplyFilters()
        }
        // if filters: fetch again by filters else normal fetch
    }

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
                            isLast={(pos + 1) === 5}
                            icons={true}
                            isReadLater={checkAvailability(RL_ARTICLES, ele.id)}
                            isAvailOffline={checkAvailability(OFFLINE_ARTICLES, ele.id)}
                            NotesPresent={fetchNotes(ele.id).length !== 0}
                            isRecommended={RecommendedCategory === ele.sectionName.toLowerCase()}
                        />
                    })
                }
            </div>
            <NewsCardLoading
                n={4}
                display={HomePgArt.loading}
            />
            <NewsError
                DISPLAY={HomePgArt.error}
                retry={retry}
            />
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
                            // isLast={pos + 1===5}
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
    const { HomePgArt } = useContext(Context);
    useEffect(() => {
        SlicingLogic(5, DATA.news.response.results, setThisArticles, CurrentPagination)
    }, [CurrentPagination])

    return (
        <div className="px-40">
            {/* top filters section */}
            <HomeHeader />

            <div className="px-20">
                {/* middle section */}
                <div className="flex justify-between items-start space-x-20 min-h-135">
                    <LatestNews ARTICLES={ThisArticles} />
                    {/* <RecommendedNews ARTICLES={DATA.news.response.results.slice(0, 6)} /> */}
                </div>
                {/* bottom pagination */}
                <Pagination
                    display={!(HomePgArt.error) && !(HomePgArt.loading)}
                    ArtLen={DATA.news.response.results.length}
                    CurrentPgtn={CurrentPagination}
                    setCurrentPgtn={setCurrentPagination}
                    changeFactor={5}
                    className={"border-t border-gray-200 py-5"}
                />
            </div>
        </div>
    )
}

export default Home