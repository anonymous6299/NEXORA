const ReadLater = (stateFunction, newsitem, availability,availabilityFunction) => {

    if (availability) {

        // change the state and then localstorage
        stateFunction(prev => prev.filter((ele) => ele.id !== newsitem.id));

        const data = JSON.parse(localStorage.getItem("rl_articles"));

        const newdata = data.filter(ele => ele.id !== newsitem.id)

        localStorage.setItem("rl_articles", JSON.stringify(newdata))
    } 
    else {
        // change the state and then localstorage
        stateFunction(prev => ([...prev, newsitem]));

        const data = JSON.parse(localStorage.getItem("rl_articles"));

        localStorage.setItem("rl_articles", JSON.stringify([...data, newsitem]))
    }
    
    availabilityFunction(p => !p)
}

export default ReadLater