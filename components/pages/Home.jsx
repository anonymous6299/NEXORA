import { rl_articles } from "../../data"
import CommonHeader from "../ui/CommonHeader"
import HomeHeader from "../ui/HomeHeader"
import NewsCard from "../ui/NewsCard"
import {NewsCardLoading, NewsError, RecommendationError} from "../ui/NewsLoadErr"
import Pagination from "../ui/Pagination"
import SVG from "../ui/SVG"





// latest news
const LatestNews = () => {
    return (
        <div className="w-full">
            <CommonHeader
                title={"latest news"}
                hr={false}
            />
            <div className="mt-5">
                {
                    rl_articles.map((ele, pos) => {
                        return <NewsCard
                            news={ele}
                            key={pos}
                            isLast={pos + 1 === rl_articles.length}
                            icons={true}
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
const RecommendedNews = () => {
    return (
        <div className="w-1/2">
            <CommonHeader
                title={"recommended"}
                articles={false}
            />
            <div className="mt-5">
                {
                    rl_articles.map((ele, pos) => {
                        return <NewsCard
                            news={ele}
                            size={"xs"}
                            icons={true}
                            key={pos}
                            isLast={pos + 1 === rl_articles.length}
                        />
                    })
                }
            </div>
            {/* <NewsCardLoading n={4}/> */}
            {/* <RecommendationError/> */}
        </div>
    )
}





const Home = () => {
    return (
        <div className="px-40">
            {/* top filters section */}
            <HomeHeader />

            {/* middle section */}
            <div className="flex justify-between items-start space-x-20 border-b border-gray-200 min-h-135">
                <LatestNews />
                <RecommendedNews />
            </div>

            {/* bottom pagination */}
            <Pagination />
        </div>
    )
}

export default Home