// imports
import NewsCard from "./NewsCard"


// card to display notes along with news in notes section
const NotesCard = ({ content }) => {
    console.log(content)
    return (
        <div className="border border-gray-300/50 hover:border-gray-300 transition-colors p-5 hover:cursor-pointer">
            <NewsCard
                news={content?.article}
                size={"s"}
                icons={false}
            />

            {/* notes */}
            <div className="mt-4 space-y-2.5">
                {
                    content?.notes.map((ele, pos) => {
                        return <div className="bg-gray-100 px-5 py-3">
                            <p className="text-sm text-gray-700">{ele[1]}</p>
                            <p className="text-xs text-gray-400 mt-1">{ele[2]}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default NotesCard