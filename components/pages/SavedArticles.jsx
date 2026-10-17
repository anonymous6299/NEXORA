// imports
import NewsCard from "../ui/NewsCard"
import { rl_articles, D_Val } from "../../data"
import NotesCard from "../ui/NotesCard"
import { Notes_Article_Pgtn } from "../ui/Pagination"

// common part for every section
const CommonSec = ({ title }) => {
  return (
    <>
      {/* top heading and articles */}
      <div className="flex items-center justify-between">
        <p className="capitalize font-semibold text-2xl font-display">{title}</p>
        <p className="text-gray-400 text-sm">2 article(s)</p>
      </div>

      {/* horizontal sep */}
      <hr className=" border-b border-gray-200 mt-3 mb-8" />
    </>
  )
}


// read later section
const ReadLater = () => {
  return (
    <div>
      <CommonSec title={"read later"} />
      {/* articles */}
      {rl_articles.map((ele, pos) => {
        return <NewsCard
          icons={true}
          news={ele}
          isLast={pos + 1 === rl_articles.length}
          key={pos}
        />
      })}
    </div>
    )
  // 
}


// available offline section
const OfflineSec = () => {
  return (
    <div>
      <CommonSec title={"available offline"} />
      {/* articles */}
      {rl_articles.map((ele, pos) => {
        return <NewsCard
          icons={false}
          news={ele}
          isLast={pos + 1 === rl_articles.length}
          key={pos}
        />
      })}
    </div>
    )
  // 
}



// notes section
const NotesSec = () => {
  return (
    <div>
      <CommonSec title={"notes"} />
      {/* articles */}
      <NotesCard/>
      <Notes_Article_Pgtn />
    </div>
    )
}

const SavedArticles = () => {
  return (
    <div className="w-full px-84 my-10 space-y-16">
      <ReadLater />
      <OfflineSec />
      <NotesSec />
    </div>
  )
}

export default SavedArticles