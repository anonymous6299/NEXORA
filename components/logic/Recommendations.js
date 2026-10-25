const IncreaseData = (category, data) => {
    if (data.length === 6) {
        return data
    } else {
        let newdata = data;
        const result = data.find(ele => ele.category === category)
        if (result) {
            const numData = result.visits
            newdata[newdata.indexOf(result)] = { category: category, visits: numData + 1 }
        }
        else {
            newdata = [...newdata, { category: category, visits: 1 }]

        }
        localStorage.setItem("recommendations_data", JSON.stringify(newdata))
        return newdata
    }
}

export { IncreaseData }