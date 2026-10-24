const fetchNotes = (id) => {

    const Notes = JSON.parse(localStorage.getItem("notes"));
    const ReturnData = Notes.find(ele => ele.id === id);

    if (ReturnData) {
        return ReturnData.notes
    }
    else {
        return []
    }
}




// add note to local storage function 
const addNotesLS = (id, note) => {
    let Notes = JSON.parse(localStorage.getItem("notes"));
    const data = Notes.find(ele => ele.id === id);

    if (data) {
        Notes[Notes.indexOf(data)].notes = [...Notes[Notes.indexOf(data)].notes, note]
    }
    else {
        Notes = [...Notes, { id: id, notes: [note] }]
    }
    localStorage.setItem("notes", JSON.stringify(Notes))

}



// remove note from local storage function 
const remNotesLS = (articleID,noteID) => {
    let Notes = JSON.parse(localStorage.getItem("notes"));
    const data = Notes.find(ele => ele.id === articleID);

    Notes[Notes.indexOf(data)].notes = Notes[Notes.indexOf(data)].notes.filter(ele => ele[0] !== noteID)

    localStorage.setItem("notes", JSON.stringify(Notes))

}


export { fetchNotes,addNotesLS,remNotesLS }