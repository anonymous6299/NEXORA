const FetchItem = async (id, key) => {
    let resp = await fetch(`https://content.guardianapis.com/${id}?api-key=${key}&show-fields=thumbnail,byline,body`);
    resp = await resp.json();
    return resp.response.content
}

const FetchWithoutFilters = async (key) => {

    let resp = await fetch(`https://content.guardianapis.com/search?api-key=${key}&show-fields=trailText,thumbnail,byline&page-size=100`);
    resp = await resp.json();
    return resp.response.results
}



export { FetchItem, FetchWithoutFilters }