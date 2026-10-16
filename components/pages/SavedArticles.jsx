import { rl_articles, D_Val } from "../../data"


// news card
const NewsCard = ({ title, icons }) => {
  const classname = [
    "text-xs font-medium text-gray-400 uppercase tracking-widest",
    "font-display text-lg text-gray-900 hover:text-gray-600 font-semibold",
    "text-gray-500 text-sm"]


  return (
    <div>
      {/* top heading and articles */}
      <div className="flex items-center justify-between">
        <p className="capitalize font-semibold text-2xl font-display">{title}</p>
        <p className="text-gray-400 text-sm">2 article(s)</p>
      </div>

      {/* horizontal sep */}
      <hr className=" border-b border-gray-200 mt-3 mb-8" />


      {/* card */}
      {
        rl_articles.map((ele, pos) => {
          return (
            <div className={`flex items-start ${pos + 1 === rl_articles.length ? "" : "border-b border-gray-200"} pb-5 space-x-5 cursor-pointer mb-7`} key={pos}>
              {/* image */}
              <div className="w-full max-w-48 aspect-3/2 overflow-hidden">
                <img
                  src={ele.image}
                  alt="img"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform"
                />
              </div>
              {/* right side content */}
              <div className="space-y-2.5">
                {/* category, title and summary */}
                {
                  [ele.category, ele.title, ele.summary].map((val, pos) => {
                    return <p className={classname[pos]} key={pos}>{val}</p>
                  })
                }
                {/* bottom section */}
                <div className="flex justify-between items-center">
                  {/* source and date */}
                  <div className="flex justify-between items-center text-xs space-x-7">
                    {
                      [ele.source, ele.date].map((val, pos) => {
                        return <p className="text-gray-400" key={pos}>{val}</p>
                      })
                    }
                  </div>
                  {/* cta icons */}
                  <div className={`flex justify-between items-center space-x-3 ${!icons ? "hidden" : ""}`}>
                    {
                      ele.actions.map((ele, pos) => {
                        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#99a1af" className="size-5" key={pos}>
                          <path fillRule="evenodd" d={D_Val[ele]} clipRule="evenodd" />
                        </svg>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// read later section
const ReadLater = ({ icons }) => {
  return <NewsCard
    title={"read later"}
    icons={icons}
  />
}



// available offline section
const OfflineSec = ({ icons }) => {
  return <NewsCard
    title={"available offline"}
    icons={icons}
  />

}


// notes section
const NotesSec = () => {
  return <div>

  </div>
}

const SavedArticles = () => {
  return (
    <div className="w-full px-84 my-10 space-y-16">
      <ReadLater icons={true} />
      <OfflineSec icons={false} />
      <NotesSec />
    </div>
  )
}

export default SavedArticles