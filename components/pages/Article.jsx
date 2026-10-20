// imports
import { useState } from 'react'
import SVG from '../ui/SVG'
import AISummary from '../ui/AISummary'
import ArticleLoading from '../ui/ArticleLoading'
import { NewsError } from '../ui/NewsLoadErr'
import Context from "../../context/ContextInit";
import DATA from '../../data'


// news content component
const NewsContent = () => {
    const content = [
        "In a historic development, representatives from 142 nations gathered in Geneva's Palais des Nations to sign the Global AI Governance Accord — the most significant international tech policy agreement in decades.",
        "The framework establishes binding safety standards for frontier AI systems, mandates transparency requirements for large language models, and creates an independent international monitoring body with enforcement authority.",
        `"This is the moment the international community recognized that artificial intelligence requires the same level of coordinated governance as nuclear technology," said Dr. Amara Diallo, the accord's chief architect.`,
        "The agreement includes provisions for a global AI incident database — a shared repository where member states must report significant AI-related failures within 72 hours. Signatories have committed to a phased implementation schedule beginning in January 2027, with full compliance required by 2030.",
        "Critics argue the reporting threshold remains too high, but supporters note it represents an unprecedented level of international information sharing. The accord is expected to reshape how private AI developers plan their research roadmaps, particularly around evaluation and red-teaming requirements.",
        "A parallel technical committee will convene quarterly to update safety benchmarks as the technology evolves — a recognition that static regulations cannot keep pace with rapid model development."
    ]

    return (
        <div className="w-[65%]">
            {/* title, category and author */}
            <div className=" pb-3 space-y-5">
                <p className="uppercase text-xs font-medium text-gray-400">technology</p>
                <p className="capitalize font-display text-4xl font-bold text-gray-950 leading-tight">global ai governance framework reaches critical milestone</p>

                {/* publisher and date */}
                <div className="flex w-fit justify-between space-x-4 items-center">
                    <p className="text-sm font-medium text-gray-700 capitalize">the financial times</p>
                    <p className="text-sm text-gray-300">·</p>
                    <p className="text-sm text-gray-400">September 1, 2026</p>
                </div>
            </div>

            {/* separator */}
            <hr className="border border-gray-100 mt-5" />

            {/* cta buttons */}
            <div className="flex items-center space-x-3 my-7">
                {
                    ["read later", "save offline", "generate summary"].map((ele, pos) => {
                        return <button key={pos} className="border border-gray-200 hover:border-gray-400 capitalize text-sm px-3 py-1.5 cursor-pointer flex items-center space-x-2.5 justify-between transition-colors">
                            <SVG d={DATA.D_Val_Article[pos]} className={"size-5"} {...DATA.SVG_PROPS} />
                            <p className='font-medium'>{ele}</p>
                        </button>
                    })
                }
            </div>


            {/* image and content */}
            <div>
                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=500&fit=crop&auto=format" alt="image" />
                <AISummary />
                <div className="text-justify space-y-7 my-10 text-gray-700">
                    {
                        content.map((ele, pos) => {
                            return <p key={pos}>{ele}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


// notes content component
const NotesSection = () => {
    // states
    const [Note, setNote] = useState("");
    const [DeleteNoteDisplay, setDeleteNoteDisplay] = useState(false);
    return (
        <div className='border border-gray-100 p-5 space-y-4'>
            {/* heading and count*/}
            <div className="flex items-center space-x-3">
                <p className="uppercase text-gray-500 text-sm font-semibold tracking-wider">notes</p>
                <p className='text-gray-300 font-normal text-sm'>( 1 / 3 )</p>
            </div>


            {/* notes */}
            <div
                className='bg-gray-100 border border-gray-100 p-3 space-y-3 w-76'
                onMouseEnter={() => { setDeleteNoteDisplay(true) }}
                onMouseLeave={() => { setDeleteNoteDisplay(false) }}>
                <p className='text-sm text-gray-800'>Interesting: monitoring body gets actual enforcement authority, not just advisory.</p>
                <div className="flex justify-between items-center">
                    <p className='text-xs text-gray-400'>September 1, 2026</p>
                    <SVG className={`size-3 text-gray-400 hover:text-black cursor-pointer ${DeleteNoteDisplay ? "" : "hidden"}`} d={"M6 18 18 6M6 6l12 12"} {...DATA.SVG_PROPS} />
                </div>
            </div>


            {/* note input */}
            <div className='border border-gray-200 flex flex-col' >
                <textarea
                    name="note"
                    id="note"
                    rows={3}
                    className='w-full focus:outline-none resize-none text-sm px-3 py-2.5 border border-transparent focus:border-gray-300 transition-all h-full placeholder:text-gray-400/80'
                    placeholder='Add a note...'
                    value={Note}
                    onChange={(e) => { setNote(e.target.value) }}>
                </textarea>

                <div className='flex justify-between items-center bg-gray-100/80 px-3 py-2'>
                    <p className='text-xs text-gray-400'>x remaining</p>
                    <button className='bg-black disabled:opacity-30 text-white capitalize px-3 py-1.5 text-xs cursor-pointer disabled:cursor-not-allowed' disabled={Note === ""}>save</button>
                </div>
            </div>
        </div>
    )
}



const Article = () => {
    return (
        <div className="flex items-start px-40 my-10 justify-between">
            {/* news content on left */}
            <NewsContent />

            {/* notes on right */}
            <NotesSection />
            {/* <ArticleLoading/> */}
            {/* <NewsError /> */}
        </div>
    )
}

export default Article




