import { useEffect, useState } from "react"
import Context from "./ContextInit"
import ReadLater from "../components/logic/ReadLater";
import AvailOffline from "../components/logic/AvailOffline";


const ContextState = ({ children }) => {
    // https://content.guardianapis.com/search?api-key=KEY_HERE&show-fields=trailText,thumbnail,byline


    // filters:
    // https://content.guardianapis.com/search?api-key=key&show-fields=trailText,thumbnail,byline&section=sport&lang=en&q=india&from-date=2026-01-01&to-date=2026-10-25


    // fn to check if articles exists in local storage or not
    const CheckArticles = (key) => {
        if (!(localStorage.getItem(key))) {
            localStorage.setItem(key, JSON.stringify([]));
        }
    }

    // states for all three types of articles
    const [RL_ARTICLES, set_RL_ARTICLES] = useState([]);
    const [OFFLINE_ARTICLES, set_OFFLINE_ARTICLES] = useState([]);
    const [NOTES_ARTICLES, set_NOTES_ARTICLES] = useState([]);

    // state representing article currently being viewed in /article page
    const [CurrentArtcle, setCurrentArtcle] = useState(null);

    // read later initiation function
    const initiateRL = (isReadLater, setIsReadLater) => {
        ReadLater(set_RL_ARTICLES, CurrentArtcle, isReadLater, setIsReadLater)
    }

    // save offline initiation function
    const initiateSO = (isAvailOffline, setIsAvailOffline, fullArticle) => {
        AvailOffline(set_OFFLINE_ARTICLES, CurrentArtcle, fullArticle, isAvailOffline, setIsAvailOffline)
    }

    // state for storing recommended articles
    const [RecommendedArticles, setRecommendedArticles] = useState([]);

    // state for articles on home
    const [HomePgArt, setHomePgArt] = useState([]);

    // state for filters
    const [Filters, setFilters] = useState({
        topic: "Select",
        date: { type: "From/To", value: "" },
        country: "Country",
        language: "Lang",
    })

    // state for checking filters empty or not
    const [FiltersEmpty, setFiltersEmpty] = useState(true)
    const ResetFilters = () => {
        setFilters({
            topic: "Select",
            date: { type: "From/To", value: "" },
            country: "Country",
            language: "Lang",
        })
    }
    const FiltersToString = () => {
        let QueryString=""
        if (Filters.topic!=="Select") {
            QueryString+="&section="+Filters.topic
        }
        if (Filters.date.type!=="From/To"&&Filters.date.value!=="") {
            QueryString+="&"+ Filters.date.type+"-date="+Filters.date.value
        }
        if (Filters.country!=="Country") {
            QueryString+="&q="+Filters.country
        }
        if (Filters.language!=="Lang") {
            QueryString+="&lang="+Filters.language
        }
        return QueryString
    }
    // tasks to be performed on very first render
    useEffect(() => {
        // check articles
        CheckArticles("rl_articles")
        CheckArticles("offline_articles")
        CheckArticles("offline_articles_full")
        CheckArticles("notes_articles")
        CheckArticles("notes")
        CheckArticles("recommendations_data")

        // set articles
        set_RL_ARTICLES(JSON.parse(localStorage.getItem("rl_articles")));
        set_OFFLINE_ARTICLES(JSON.parse(localStorage.getItem("offline_articles")));
        set_NOTES_ARTICLES(JSON.parse(localStorage.getItem("notes")));

        // fetch and set articles for home page
    }, [])
    useEffect(() => {
        const { topic, date, country, language } = Filters
        const EmptyCondition = topic === "Select" && country === "Country" && language === "Lang" && (date.type === "From/To" || date.value === "");

        setFiltersEmpty(EmptyCondition)
        if (!EmptyCondition) {
            // fetch with filters and set the resp on home page
        }

    }, [Filters])
    
    return (
        <Context.Provider value={{
            RL_ARTICLES,
            OFFLINE_ARTICLES,
            NOTES_ARTICLES,
            CurrentArtcle,
            RecommendedArticles,
            Filters,
            setFilters,
            setRecommendedArticles,
            set_RL_ARTICLES,
            set_OFFLINE_ARTICLES,
            set_NOTES_ARTICLES,
            setCurrentArtcle,
            initiateRL,
            initiateSO,
            ResetFilters,
            FiltersEmpty
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextState