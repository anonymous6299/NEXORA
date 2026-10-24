import { useState } from "react"
import DATA from "../../data"
import SVG from "./SVG"

const ArticleNote = ({ content, removeNote }) => {
  const [DeleteNoteDisplay, setDeleteNoteDisplay] = useState(false)

  return (
    <div
      className='bg-gray-100 border border-gray-100 p-3 space-y-3 w-76 cursor-pointer'
      onMouseEnter={() => { setDeleteNoteDisplay(true) }}
      onMouseLeave={() => { setDeleteNoteDisplay(false) }}>
      <p className='text-sm text-gray-800'>{content[1]}</p>
      <div className="flex justify-between items-center">
        <p className='text-xs text-gray-400'>{content[2]}</p>
        <div onClick={()=>{removeNote(content[0])}}>
          <SVG
            className={`size-3.5 text-gray-400 hover:text-black ${DeleteNoteDisplay ? "" : "hidden"}`}
            d={"M6 18 18 6M6 6l12 12"}
            {...DATA.SVG_PROPS}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleNote