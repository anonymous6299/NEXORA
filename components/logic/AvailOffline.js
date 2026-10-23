
const AvailOffline = (stateFunction, newsitemDisplay, newsitemFull, availability, availabilityFunction) => {

    if (availability) {

        // first update the data of news to be listed on home/saved page
        stateFunction(prev => prev.filter((ele) => ele?.id !== newsitemDisplay.id));

        const dataOfflineArt = JSON.parse(localStorage.getItem("offline_articles"));

        const newdata = dataOfflineArt.filter(ele => ele?.id !== newsitemDisplay.id);

        localStorage.setItem(
            "offline_articles", 
            JSON.stringify(newdata))




        // then update data in localstorage which will be used in /article page
        const dataOfflineArtFull = JSON.parse(localStorage.getItem("offline_articles_full"));

        const newdatafull = dataOfflineArtFull.filter(ele => ele?.id !== newsitemFull.id)

        localStorage.setItem("offline_articles_full", JSON.stringify(newdatafull))

    } 
    else {
        // first update the data of news to be listed on home/saved page

        stateFunction(prev => ([...prev, newsitemDisplay]));

        const dataOfflineArt = JSON.parse(localStorage.getItem("offline_articles"));

        localStorage.setItem(
            "offline_articles", 
            JSON.stringify([...dataOfflineArt, newsitemDisplay]));


            

        // then update data in localstorage which will be used in /article page
        const dataOfflineArtFull = JSON.parse(localStorage.getItem("offline_articles_full"));

        localStorage.setItem(
            "offline_articles_full", 
            JSON.stringify([...dataOfflineArtFull, newsitemFull]));
    }

    availabilityFunction(p => !p)
}

export default AvailOffline