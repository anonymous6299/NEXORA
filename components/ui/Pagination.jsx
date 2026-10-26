// imports
import SVG from "./SVG"
import DATA from '../../data'
import { NotesPagination } from "../logic/PaginationLogic"

// pagination
const Pagination = ({ Pg_Type, display, ArtLen, CurrentPgtn, setCurrentPgtn,changeFactor }) => {
    const classname = "size-4"

    const btnClass = "p-1.5 border border-gray-200 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"

    return (
        <div className={`${display ? "flex" : "hidden"} justify-between items-center w-fit my-5 space-x-4`}>

            {/* prev */}
            <button
                className={btnClass}
                disabled={CurrentPgtn === 0}
                onClick={() => { NotesPagination(setCurrentPgtn, "p") }}>
                <SVG
                    d={"M15.75 19.5 8.25 12l7.5-7.5"}
                    {...DATA.SVG_PROPS}
                    className={classname}
                />
            </button>

            {/* description text or page numbers */}
            {Pg_Type === "notes" ? <p className="text-sm text-gray-500">Article {CurrentPgtn + 1} of {ArtLen}</p> : Array.from({ length: Math.ceil(ArtLen / 5) }).map((ele, pos) => {
                return <button className={`${btnClass} ${pos === CurrentPgtn ? "bg-black text-white" : ""} text-xs px-3 font-bold`} key={pos}>{pos + 1}</button>
            })}


            {/* next */}
            <button
                className={btnClass}
                // (5 + change)
                disabled={Pg_Type === "notes" ? CurrentPgtn + 1 === ArtLen : (changeFactor * (CurrentPgtn + 1)) > ArtLen}
                onClick={() => { NotesPagination(setCurrentPgtn, "n") }}>
                <SVG
                    d={"m8.25 4.5 7.5 7.5-7.5 7.5"}
                    {...DATA.SVG_PROPS}
                    className={classname}
                />
            </button>

        </div>
    )
}




export default Pagination



