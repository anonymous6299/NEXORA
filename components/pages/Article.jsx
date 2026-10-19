// imports
import { useState } from 'react'
import SVG from '../ui/SVG'

// svg props
const props = {
    SVGOthers: {
        fill: "none",
        strokeWidth: 1.5,
        stroke: "currentColor",
    },
    PathOthers: {
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }
}

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

    const dvaleus = ["M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3", "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"]


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
                            <SVG d={dvaleus[pos]} className={"size-5"} {...props} />
                            <p className='font-medium'>{ele}</p>
                        </button>
                    })
                }
            </div>


            {/* image and content */}
            <div>
                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=500&fit=crop&auto=format" alt="image" />
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
            <div className='bg-gray-100 border border-gray-100 p-3 space-y-3 w-76' onMouseEnter={()=>{setDeleteNoteDisplay(true)}} onMouseLeave={()=>{setDeleteNoteDisplay(false)}}>
                <p className='text-sm text-gray-800'>Interesting: monitoring body gets actual enforcement authority, not just advisory.</p>
                <div className="flex justify-between items-center">
                    <p className='text-xs text-gray-400'>September 1, 2026</p>
                    <SVG className={`size-3 text-gray-400 hover:text-black cursor-pointer ${DeleteNoteDisplay?"":"hidden"}`} d={"M6 18 18 6M6 6l12 12"} {...props} />
                </div>
            </div>


            {/* note input */}
            <div className='border border-gray-200 flex flex-col' >
                <textarea name="note" id="note" rows={3} className='w-full focus:outline-none resize-none text-sm px-3 py-2.5 border border-transparent focus:border-gray-300 transition-all h-full' placeholder='Add a note...' value={Note} onChange={(e)=>{setNote(e.target.value)}}></textarea>
                <div className='flex justify-between items-center bg-gray-100 px-3 py-2'>
                    <p className='text-xs text-gray-400'>x remaining</p>
                    <button className='bg-black disabled:opacity-30 text-white capitalize px-3 py-1.5 text-xs cursor-pointer disabled:cursor-not-allowed' disabled={Note===""}>save</button>
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
        </div>
    )
}

export default Article




