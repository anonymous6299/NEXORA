const checkAvailability = (arrayToSearch, id) => {
    if (arrayToSearch.length > 0) {
        const item = arrayToSearch.filter(ele => ele?.id === id);
        return item.length !== 0
    }
    else {
        return false
    }
}

export default checkAvailability