import Context from "./ContextInit"


const ContextState = ({ children }) => {
// https://content.guardianapis.com/search?api-key=KEY_HERE&show-fields=trailText,thumbnail,byline    

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default ContextState