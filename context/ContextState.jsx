import { useEffect, useState } from "react"
import Context from "./ContextInit"


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

    // function to change any article data and automatically update in localstorage
    const ChangeArticle = (stateFunction, key, availability) => {
        if (availability) {
            stateFunction(prev => prev.map((ele) => ele !== CurrentArtcle));
            const data = JSON.parse(localStorage.getItem(key));
            const newdata = data.filter(ele => ele.id !== CurrentArtcle.id)
            localStorage.setItem(key, JSON.stringify(newdata))
        } else {
            stateFunction(prev => ([...prev, CurrentArtcle]));
            const data = JSON.parse(localStorage.getItem(key));
            localStorage.setItem(key, JSON.stringify([...data, CurrentArtcle]))
        }
    }

    // tasks to be performed on very first render
    useEffect(() => {
        // check articles
        CheckArticles("rl_articles")
        CheckArticles("offline_articles")
        CheckArticles("notes_articles")

        // set articles
        set_RL_ARTICLES(JSON.parse(localStorage.getItem("rl_articles")));
        set_OFFLINE_ARTICLES(JSON.parse(localStorage.getItem("offline_articles")));
        set_NOTES_ARTICLES(JSON.parse(localStorage.getItem("notes_articles")));
    }, [])

    return (
        <Context.Provider value={{
            RL_ARTICLES,
            OFFLINE_ARTICLES,
            NOTES_ARTICLES,
            CurrentArtcle,
            set_RL_ARTICLES,
            set_OFFLINE_ARTICLES,
            set_NOTES_ARTICLES,
            setCurrentArtcle,
            ChangeArticle
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextState