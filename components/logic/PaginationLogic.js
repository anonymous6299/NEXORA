

const NotesPagination = (SetState, NavType) => {
    if (NavType === "n") {
        SetState(p => p + 1)
    } else {
        SetState(p => p - 1)
    }

}

const SlicingLogic = (changeFactor,DATA,setState,CurrentPagination) => {
    const change = changeFactor * CurrentPagination;
    if ((changeFactor + change) > DATA.length) {
        setState(DATA.slice(change, DATA.length))
    } else {
        setState(DATA.slice(0 + change, changeFactor + change))
    }
}


export { NotesPagination,SlicingLogic }