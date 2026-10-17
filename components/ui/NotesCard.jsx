import { rl_articles } from "../../data"
import NewsCard from "./NewsCard"


const NotesCard = () => {
    return (
        <div className="border border-gray-300/50 hover:border-gray-300 transition-colors p-5 hover:cursor-pointer">
            <NewsCard
                news={rl_articles[0]}
                size={"s"}
            />

            {/* notes */}
            <div className="mt-4 space-y-2.5">
                <div className="bg-gray-100 px-5 py-3">
                    <p className="text-sm text-gray-700">Interesting: monitoring body gets actual enforcement authority, not just advisory.</p>
                    <p className="text-xs text-gray-400 mt-1">September 1,2026</p>
                </div>
            </div>
        </div>
    )
}

export default NotesCard