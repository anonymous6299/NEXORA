import { useEffect, useState } from "react"
import Context from "./ContextInit"
import ReadLater from "../components/logic/ReadLater";
import AvailOffline from "../components/logic/AvailOffline";


const ContextState = ({ children }) => {
    // https://content.guardianapis.com/search?api-key=KEY_HERE&show-fields=trailText,thumbnail,byline

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
    }, [])

    return (
        <Context.Provider value={{
            RL_ARTICLES,
            OFFLINE_ARTICLES,
            NOTES_ARTICLES,
            CurrentArtcle,
            RecommendedArticles, 
            setRecommendedArticles,
            set_RL_ARTICLES,
            set_OFFLINE_ARTICLES,
            set_NOTES_ARTICLES,
            setCurrentArtcle,
            initiateRL,
            initiateSO
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextState