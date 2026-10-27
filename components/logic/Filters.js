const FiltersToString = (Filters) => {
        let QueryString = ""
        if (Filters.topic !== "Select") {
            QueryString += "&section=" + Filters.topic.toLowerCase()
        }
        if (Filters.date.type !== "From/To" && Filters.date.value !== "") {
            QueryString += "&" + Filters.date.type + "-date=" + Filters.date.value
        }
        if (Filters.country !== "Country") {
            QueryString += "&q=" + Filters.country.toLowerCase()
        }
        if (Filters.language !== "Lang") {
            QueryString += "&lang=" + Filters.language
        }
        return QueryString
    }

const FetchByFilters = async (apikey,filters) => {
    let resp = await fetch(`https://content.guardianapis.com/search?api-key=${apikey}&show-fields=thumbnail,byline,body&page-size=100${filters}`);
    console.log(filters)
    resp = await resp.json();
    return resp.response.results;
}

export {FiltersToString,FetchByFilters}