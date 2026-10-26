// imports
import { useContext, useEffect, useRef, useState } from 'react'
import SVG from '../ui/SVG'
import AISummary from '../ui/AISummary'
import ArticleLoading from '../ui/ArticleLoading'
import { NewsError } from '../ui/NewsLoadErr'
import DATA from '../../data'
import { useParams } from 'react-router'
import ImagePlaceholer from '../ui/ImagePlaceholer'
import DOMPurify from "dompurify";
import Context from '../../context/ContextInit'
import checkAvailability from '../logic/CheckAvailbility'
import GenerateAISummary from '../logic/AISummary'
import { addNotesLS, fetchNotes, remNotesLS } from '../logic/Notes'
import ArticleNote from '../ui/ArticleNote'
// news content component
const NewsContent = ({
    ARTICLE,
    DISPLAY,
    isReadLater,
    setIsReadLater,
    isAvailOffline,
    setIsAvailOffline
}) => {

    // context consumption
    const {
        initiateRL,
        initiateSO
    } = useContext(Context);

    const btnClass = "border border-gray-200 hover:border-gray-400 capitalize text-sm px-3 py-1.5 cursor-pointer flex items-center space-x-2.5 justify-between transition-colors "

    const imgRef = useRef(null);
    // ai summary state
    const [AI_SUMMARY, set_AI_SUMMARY] = useState({ text: "", loading: false, dipslay: false })

    const GenerateSummary = async () => {
        imgRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        window.scrollBy({
            top: 300,
            behavior: "smooth"
        });
        try {
            set_AI_SUMMARY(prev => ({ ...prev, loading: true, display: true }))
            const resp = await GenerateAISummary(ARTICLE?.webTitle, ARTICLE?.fields?.body)
            set_AI_SUMMARY(prev => ({ ...prev, loading: false, text: resp }))
        } catch (error) {
            console.log(error)
            set_AI_SUMMARY(prev => ({ ...prev, loading: false, text: "Couldn't generate summary. Try again later." }))
        }
    }
    return (
        <div className={`w-[65%] ${DISPLAY ? "" : "hidden"}`}>
            {/* title, category and author */}
            <div className=" pb-3 space-y-5">
                <p className="uppercase text-xs font-medium text-gray-400">{ARTICLE?.sectionName}</p>
                <p className="capitalize font-display text-4xl font-bold text-gray-950 leading-tight">{ARTICLE?.webTitle}</p>

                {/* publisher and date */}
                <div className="flex w-fit justify-between space-x-4 items-center">
                    <p className="text-sm font-medium text-gray-700 capitalize">{ARTICLE?.fields?.byline}</p>
                    <p className="text-sm text-gray-300">·</p>
                    <p className="text-sm text-gray-400"> {new Date(ARTICLE?.webPublicationDate).toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                    </p>
                </div>
            </div>

            {/* separator */}
            <hr className="border border-gray-100 mt-5" />

            {/* cta buttons */}
            <div className="flex items-center space-x-3 my-7">

                {/* read later */}
                <button
                    className={btnClass + `${isReadLater ? "bg-black text-white" : ""}`}
                    onClick={() => {
                        initiateRL(isReadLater, setIsReadLater)
                    }}>

                    <SVG
                        d={DATA.D_Val_Article[0]}
                        className={"size-5"}
                        {...DATA.SVG_PROPS}
                        fill={isReadLater ? "white" : null} />
                    <p className="font-medium">{isReadLater ? "Saved" : "read later"}</p>
                </button>


                {/* save offline */}
                <button
                    className={btnClass + `${isAvailOffline ? "bg-black text-white" : ""}`}
                    onClick={() => {
                        initiateSO(isAvailOffline, setIsAvailOffline, ARTICLE)
                    }}>
                    <SVG
                        d={DATA.D_Val_Article[1]}
                        className={"size-5"}
                        {...DATA.SVG_PROPS} />
                    <p className="font-medium">
                        {isAvailOffline ? "available" : "save"} offline
                    </p>
                </button>


                {/* generate ai summary */}
                <button
                    className={btnClass + "disabled:cursor-not-allowed"}
                    disabled={AI_SUMMARY.text.length !== 0}
                    onClick={GenerateSummary}
                >
                    <SVG
                        d={DATA.D_Val_Article[2]}
                        className={"size-5"}
                        {...DATA.SVG_PROPS} />
                    <p className="font-medium">generate summary</p>
                </button>
            </div>


            {/* image and content */}
            <div>
                {/* article image */}
                {typeof ARTICLE?.fields?.thumbnail === "string" && ARTICLE?.fields?.thumbnail.length !== 0 ? <img
                    ref={imgRef}
                    src={ARTICLE?.fields?.thumbnail}
                    alt="image"
                    className='w-full' /> : <ImagePlaceholer />}

                {/* ai summary */}
                <AISummary
                    display={AI_SUMMARY.dipslay}
                    summaryProps={AI_SUMMARY}
                />


                <div className="text-justify space-y-7 my-10 text-gray-700 leading-10"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ARTICLE?.fields?.body) }}
                >

                </div>
            </div>
        </div>
    )
}


// notes content component
const NotesSection = ({ DISPLAY, Article, setArticle }) => {
    // current note state and cross icon display state
    const [Note, setNote] = useState("");

    // context consumption
    const { set_NOTES_ARTICLES } = useContext(Context)
    // fn to add note
    const SubmitNote = () => {
        const date = new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        const notesCurrentLen = Article.notes.length
        setArticle(p => ({ ...p, notes: [...p.notes, [3 - notesCurrentLen, Note, date]] }))
        addNotesLS(Article.article, [3 - notesCurrentLen, Note, date], set_NOTES_ARTICLES)
        setNote("")
    }

    const removeNote = (key) => {
        setArticle(p => ({ ...p, notes: p.notes.filter(ele => ele[0] !== key) }))
        remNotesLS(Article.article.id, set_NOTES_ARTICLES)
    }
    // states
    return (
        <div className={`${DISPLAY ? "" : "hidden"} border border-gray-100 p-5 space-y-4 sticky top-28`}>
            {/* heading and count*/}
            <div className="flex items-center space-x-3">
                <p className="uppercase text-gray-500 text-sm font-semibold tracking-wider">notes</p>
                <p className='text-gray-300 font-normal text-sm'>( {Article.notes.length} / 3 )</p>
            </div>


            {/* notes */}
            {
                Article.notes.length > 0 ? Article.notes.map((ele, pos) => {
                    return <ArticleNote content={ele} key={pos} removeNote={removeNote} />
                }) : <p className='text-sm text-gray-400 italic w-76'>No notes yet.</p>
            }


            {/* note input */}
            <div className='border border-gray-200 flex flex-col' >
                <textarea
                    name="note"
                    id="note"
                    rows={3}
                    className='w-full focus:outline-none resize-none text-sm px-3 py-2.5 border border-transparent focus:border-gray-300 transition-all h-full placeholder:text-gray-400/80'
                    placeholder='Add a note...'
                    value={Note}
                    onChange={e => setNote(e.target.value)}
                >
                </textarea>

                <div className='flex justify-between items-center bg-gray-100/80 px-3 py-2'>
                    <p className='text-xs text-gray-400'>{3 - Article.notes.length} remaining</p>
                    <button
                        className='bg-black disabled:opacity-30 text-white capitalize px-3 py-1.5 text-xs cursor-pointer disabled:cursor-not-allowed'
                        disabled={Article.notes.length === 3 || Note === ""}
                        onClick={SubmitNote}
                    >save</button>
                </div>
            </div>
        </div>
    )
}



const Article = () => {
    // usea params hook init for id
    const params = useParams();
    const id = params['*'];

    // article and component display states
    const [Article, setArticle] = useState({ article: {}, notes: [] });
    const [ArtIsLoading, setArtIsLoading] = useState(true);
    const [ArtError, setArtError] = useState(false);

    // states for checking article avail. and then setting button color
    const [isReadLater, setIsReadLater] = useState(false);
    const [isAvailOffline, setIsAvailOffline] = useState(false);

    // context consumption
    const { RL_ARTICLES, OFFLINE_ARTICLES } = useContext(Context);

    // fn to fetch article when this page is opened
    const fetchArticle = async () => {
        try {
            setArtIsLoading(true)
            if (checkAvailability(OFFLINE_ARTICLES, id)) {
                setArticle({ article: JSON.parse(localStorage.getItem("offline_articles_full")).find(ele=>ele.id===id), notes: fetchNotes(id) });
                setIsReadLater(checkAvailability(RL_ARTICLES, id));
                setIsAvailOffline(checkAvailability(OFFLINE_ARTICLES, id));
            } else {
                let resp = await fetch(`https://content.guardianapis.com/${id}?api-key=${import.meta.env.VITE_API_KEY_GUARDIAN}&show-fields=thumbnail,byline,body`);
                resp = await resp.json();
                setArticle({ article: resp.response.content, notes: fetchNotes(resp.response.content.id) });
                setIsReadLater(checkAvailability(RL_ARTICLES, id));
                setIsAvailOffline(checkAvailability(OFFLINE_ARTICLES, id));
            }
            setArtIsLoading(false);
        } catch (error) {
            setArtIsLoading(false)
            setArtError(true);
        }
    }

    // error retry fn
    const RetryFn = () => {
        setArtError(false);
        fetchArticle()
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchArticle()
    }, [])

    return (
        <div className="flex items-start px-40 my-10 justify-between">
            {/* news content on left */}
            <NewsContent
                ARTICLE={Article.article}
                isReadLater={isReadLater}
                setIsReadLater={setIsReadLater}
                isAvailOffline={isAvailOffline}
                setIsAvailOffline={setIsAvailOffline}
                DISPLAY={!ArtIsLoading && !ArtError}
            />

            {/* notes on right */}
            <NotesSection
                DISPLAY={!ArtIsLoading && !ArtError}
                Article={Article}
                setArticle={setArticle}
            />

            {/* loading and error */}
            <ArticleLoading DISPLAY={ArtIsLoading} />
            <NewsError DISPLAY={ArtError} retry={RetryFn} />
        </div>
    )
}

export default Article




