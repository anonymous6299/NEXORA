import Context from "./ContextInit"


const ContextState = ({ children }) => {
    

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default ContextState