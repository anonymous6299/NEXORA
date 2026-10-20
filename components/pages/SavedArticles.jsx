// imports
import NewsCard from "../ui/NewsCard"
import DATA from "../../data"
import NotesCard from "../ui/NotesCard"
import Pagination from "../ui/Pagination"
import CommonHeader from "../ui/CommonHeader"



// read later section
const ReadLater = () => {
  return (
    <div>
      <CommonHeader title={"read later"} />
      {/* articles */}
      {DATA.rl_articles.map((ele, pos) => {
        return <NewsCard
          icons={true}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      })}
      {/* <p className="text-sm text-gray-400 py-6">No articles saved for later.</p> */}
      <Pagination/>
    </div>
    )
  // 
}


// available offline section
const OfflineSec = () => {
  return (
    <div>
      <CommonHeader title={"available offline"} />
      {/* articles */}
      {DATA.rl_articles.map((ele, pos) => {
        return <NewsCard
          icons={false}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      })}
      <Pagination/>
      {/* <p className="text-sm text-gray-400 py-6">No articles saved for offline access.</p> */}
    </div>
    )
  // 
}



// notes section
const NotesSec = () => {
  return (
    <div>
      <CommonHeader title={"notes"} />
      {/* articles */}
      <NotesCard/>
      <Pagination Pg_Type={"notes"}/>
      {/* <p className="text-sm text-gray-400 py-6">No notes yet. Open any article to add notes.</p> */}
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