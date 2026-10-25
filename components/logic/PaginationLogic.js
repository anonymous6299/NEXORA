

const NotesPagination = (SetState, NavType) => {
    if (NavType === "n") {
        SetState(p => p + 1)
    } else {
        SetState(p => p - 1)
    }

}



export { NotesPagination }