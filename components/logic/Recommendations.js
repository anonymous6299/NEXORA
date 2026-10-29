const IncreaseData = (category) => {
    let newdata = JSON.parse(localStorage.getItem("recommendations_data"))
    const result = newdata.find(ele => ele.category === category)
    if (result) {
        const numData = result.visits
        newdata[newdata.indexOf(result)] = { category: category, visits: numData + 1 }
    }
    else {
        newdata = [...newdata, { category: category, visits: 1 }]

    }
    localStorage.setItem("recommendations_data", JSON.stringify(newdata))
}





const getTopCategory = data => {
    const topCategory = data?.sort((a, b) => b.visits - a.visits)[0]

    return topCategory?topCategory.category:""
};

export { IncreaseData, getTopCategory }