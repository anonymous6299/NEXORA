// imports
import { useEffect, useState } from 'react'
import SVG from '../ui/SVG'
import AISummary from '../ui/AISummary'
import ArticleLoading from '../ui/ArticleLoading'
import { NewsError } from '../ui/NewsLoadErr'
import DATA from '../../data'
import { useParams } from 'react-router'
import ImagePlaceholer from '../ui/ImagePlaceholer'


// news content component
const NewsContent = ({ ARTICLE, DISPLAY }) => {
    return (
        <div className={`w-[65%] ${DISPLAY ? "" : "hidden"}`}>
            {/* title, category and author */}
            <div className=" pb-3 space-y-5">
                <p className="uppercase text-xs font-medium text-gray-400">{ARTICLE?.topics?.[0]}</p>
                <p className="capitalize font-display text-4xl font-bold text-gray-950 leading-tight">{ARTICLE?.title}</p>

                {/* publisher and date */}
                <div className="flex w-fit justify-between space-x-4 items-center">
                    <p className="text-sm font-medium text-gray-700 capitalize">{ARTICLE?.publisher}</p>
                    <p className="text-sm text-gray-300">·</p>
                    <p className="text-sm text-gray-400">{ARTICLE?.published_at?.slice(8, 10)} {DATA.MONTHS[Number.parseInt(ARTICLE?.published_at?.slice(5, 7))]} {ARTICLE?.published_at?.slice(0, 4)}</p>
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
                {/* ArticleLeadImage */}
                {typeof ARTICLE?.thumbnail === "strin" && ARTICLE?.thumbnail.length !== 0 ? <img src={ARTICLE?.thumbnail} alt="image" /> : <ImagePlaceholer />}
                {/* <AISummary /> */}
                <div className="text-justify space-y-7 my-10 text-gray-700 leading-10">
                    <p>{ARTICLE?.body}</p>
                </div>
            </div>
        </div>
    )
}


// notes content component
const NotesSection = ({ DISPLAY }) => {
    // states
    const [Note, setNote] = useState("");
    const [DeleteNoteDisplay, setDeleteNoteDisplay] = useState(false);
    return (
        <div className={`${DISPLAY ? "" : "hidden"} border border-gray-100 p-5 space-y-4`}>
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
    // hook init for uuid
    const { id } = useParams();

    // article and component display states
    const [Article, setArticle] = useState(null);
    const [ArtIsLoading, setArtIsLoading] = useState(true);
    const [ArtError, setArtError] = useState(false);

    // api key
    const key = import.meta.env.VITE_API_KEY_NEWS;

    // fn to fetch article when this page is opened
    const fetchArticle = async () => {
        try {
            setArtIsLoading(true)
            let resp = await fetch(`/newsapi/v1/details?uuid=${id}`);
            resp = await resp.json();
            setArticle(resp.data);
            setArtIsLoading(false);
        } catch (error) {
            setArtIsLoading(false)
            setArtError(true);
        }
    }

    useEffect(() => {
        fetchArticle()
    }, [])

    return (
        <div className="flex items-start px-40 my-10 justify-between">
            {/* news content on left */}
            <NewsContent ARTICLE={Article} DISPLAY={!ArtIsLoading && !ArtError} />

            {/* notes on right */}
            <NotesSection DISPLAY={!ArtIsLoading && !ArtError} />
            <ArticleLoading DISPLAY={ArtIsLoading} />
            <NewsError DISPLAY={ArtError} retry={fetchArticle} />
        </div>
    )
}

export default Article




