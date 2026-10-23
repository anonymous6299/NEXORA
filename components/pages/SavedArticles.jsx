// imports
import NewsCard from "../ui/NewsCard"
import DATA from "../../data"
import NotesCard from "../ui/NotesCard"
import Pagination from "../ui/Pagination"
import CommonHeader from "../ui/CommonHeader"
import { useContext } from "react"
import Context from "../../context/ContextInit"



// read later section
const ReadLater = ({ARTICLES}) => {
  return (
    <div>
      {/* header section */}
      <CommonHeader title={"read later"} length={ARTICLES.length}/>

      {/* articles */}
      {ARTICLES.length>0?ARTICLES.map((ele, pos) => {
        return <NewsCard
          icons={true}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      }):<p className="text-sm text-gray-400 py-6">No articles saved for later.</p>}

      {/* pagination */}
      <Pagination
      display={ARTICLES.length>0}
      />
    </div>
    )
  // 
}


// available offline section
const OfflineSec = ({ARTICLES}) => {
  return (
    <div>
      {/* header section */}
      <CommonHeader title={"available offline"} length={ARTICLES.length}/>


      {/* articles */}
      {ARTICLES.length>0?ARTICLES.map((ele, pos) => {
        return <NewsCard
          icons={false}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      }):<p className="text-sm text-gray-400 py-6">No articles saved for offline access.</p>}

      {/* pagination */}
      <Pagination
      display={ARTICLES.length>0}     
      />
    </div>
    )
  // 
}



// notes section
const NotesSec = ({ARTICLES}) => {
  return (
    <div>
      {/* header section */}
      <CommonHeader title={"notes"} length={ARTICLES.length}/>

      {/* articles */}
      {
        ARTICLES.length>0?ARTICLES.map((ele,pos)=>{
          return <NotesCard article={ele} key={pos}/>
        }):<p className="text-sm text-gray-400 py-6">No notes yet. Open any article to add notes.</p>
      }

      {/* pagination */}
      <Pagination
      display={ARTICLES.length>0}
      Pg_Type={"notes"}/>
    </div>
    )
}

const SavedArticles = () => {
  const {RL_ARTICLES, OFFLINE_ARTICLES, NOTES_ARTICLES} = useContext(Context)
  return (
    <div className="w-full px-84 my-10 space-y-16">
      <ReadLater ARTICLES={RL_ARTICLES}/>
      <OfflineSec ARTICLES={OFFLINE_ARTICLES}/>
      <NotesSec ARTICLES={NOTES_ARTICLES}/>
    </div>
  )
}

export default SavedArticles