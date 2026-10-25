const fetchNotes = (id) => {

    const Notes = JSON.parse(localStorage.getItem("notes"));
    const ReturnData = Notes.find(ele => ele.article.id === id);

    if (ReturnData) {
        return ReturnData.notes
    }
    else {
        return []
    }
}




// add note to local storage function 
const addNotesLS = (article, note,setState) => {
    let Notes = JSON.parse(localStorage.getItem("notes"));
    const data = Notes.find(ele => ele.article.id === article.id);

    if (data) {
        Notes[Notes.indexOf(data)] = {...Notes[Notes.indexOf(data)], notes:[...Notes[Notes.indexOf(data)].notes,note]}
    }
    else {
        Notes = [...Notes, { article: article, notes: [note] }]
    }
    localStorage.setItem("notes", JSON.stringify(Notes))
    setState(Notes)

}



// remove note from local storage function 
const remNotesLS = (articleID,setState) => {
    let Notes = JSON.parse(localStorage.getItem("notes"));
    const data = Notes.filter(ele => ele.article.id !== articleID);

    localStorage.setItem("notes", JSON.stringify(data))
    setState(data)

}


export { fetchNotes,addNotesLS,remNotesLS }