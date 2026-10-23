const ReadLater = (stateFunction, key, newsitem, availability,availabilityFunction) => {
    if (availability) {
        stateFunction(prev => prev.filter((ele) => ele.id !== newsitem.id));
        const data = JSON.parse(localStorage.getItem(key));
        const newdata = data.filter(ele => ele.id !== newsitem.id)
        localStorage.setItem(key, JSON.stringify(newdata))
    } else {
        stateFunction(prev => ([...prev, newsitem]));
        const data = JSON.parse(localStorage.getItem(key));
        localStorage.setItem(key, JSON.stringify([...data, newsitem]))
    }
    availabilityFunction(p => !p)
}

export default ReadLater