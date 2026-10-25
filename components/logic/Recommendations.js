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
    const topCategories = [...(data || [])]
        .sort((a, b) => b.visits - a.visits)
        .slice(0, 6)
        .map(ele => ele.category);

    return topCategories.length
        ? topCategories[Math.floor(Math.random() * topCategories.length)]
        : "";
};

export { IncreaseData, getTopCategory }