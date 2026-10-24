// imports
import NewsCard from "../ui/NewsCard"
import DATA from "../../data"
import NotesCard from "../ui/NotesCard"
import Pagination from "../ui/Pagination"
import CommonHeader from "../ui/CommonHeader"
import { useContext, useEffect, useRef, useState } from "react"
import Context from "../../context/ContextInit"



// read later section
const ReadLater = ({ ARTICLES }) => {
  return (
    <div>
      {/* header section */}
      <CommonHeader title={"read later"} length={ARTICLES.length} />

      {/* articles */}
      {ARTICLES.length > 0 ? ARTICLES.map((ele, pos) => {
        return <NewsCard
          icons={false}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      }) : <p className="text-sm text-gray-400 py-6">No articles saved for later.</p>}

      {/* pagination */}
      <Pagination
        display={ARTICLES.length > 0}
      />
    </div>
  )
  // 
}


// available offline section
const OfflineSec = ({ ARTICLES }) => {
  return (
    <div>
      {/* header section */}
      <CommonHeader title={"available offline"} length={ARTICLES.length} />


      {/* articles */}
      {ARTICLES.length > 0 ? ARTICLES.map((ele, pos) => {
        return <NewsCard
          icons={false}
          news={ele}
          isLast={pos + 1 === DATA.rl_articles.length}
          key={pos}
        />
      }) : <p className="text-sm text-gray-400 py-6">No articles saved for offline access.</p>}

      {/* pagination */}
      <Pagination
        display={ARTICLES.length > 0}
      />
    </div>
  )
  // 
}



// notes section
const NotesSec = ({ ARTICLES }) => {
  const [CurrentPgtn, setCurrentPgtn] = useState(0);
  const scrollRef = useRef(null);
  const [Margin, setMargin] = useState(0);

  useEffect(() => {
    setMargin(-58.25*CurrentPgtn)
    console.log("first")
  }, [CurrentPgtn])
  

  return (
    <div>
      {/* header section */}
      <CommonHeader title={"notes"} length={ARTICLES.length} />

      {/* articles */}
      <div className="max-w-213 overflow-x-hidden">
        {
        ARTICLES?.length > 0 ? <div
          className="flex items-start space-x-20 transition-all duration-500"
          ref={scrollRef}
          style={{marginLeft: Margin +"rem"}}
          >
          {
            ARTICLES.map((ele, pos) => {
              return <div key={pos}><NotesCard content={ele} /></div>
            })
          }
        </div> : <p className="text-sm text-gray-400 py-6">No notes yet. Open any article to add notes.</p>
      }
      </div>

      {/* pagination */}
      <Pagination
        display={ARTICLES.length > 0}
        Pg_Type={"notes"}
        ArtLen={ARTICLES.length}
        CurrentPgtn={CurrentPgtn}
        setCurrentPgtn={setCurrentPgtn}
      />

    </div>
  )
}

const SavedArticles = () => {
  const { RL_ARTICLES, OFFLINE_ARTICLES, NOTES_ARTICLES } = useContext(Context)
  return (
    <>
      <div className="w-full px-84 my-10 space-y-16">
        <ReadLater ARTICLES={RL_ARTICLES} />
        <OfflineSec ARTICLES={OFFLINE_ARTICLES} />
        <NotesSec ARTICLES={NOTES_ARTICLES} />
      </div>
    </>
  )
}

export default SavedArticles