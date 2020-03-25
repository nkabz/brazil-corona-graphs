export function createPlotGraph (data, type) {
    return Object.keys(data).map((key) => {
        return {
            x: data[key].date,
            y: data[key][type],
            name: type,
        }
    })
}

export function incrementPlotGraph (data, type) {
    return Object.keys(data).filter((value) => {
        return data[value][type] > 0;
    }).map((filteredValue, index) => {
        return {
            x: index+1,
            y: data[filteredValue][type] - data[filteredValue-1][type]
        }
    })
}

//Function is WIP
export function incrementAverage (data) {
    let avgIncrease = 0;
    const dataFiltered = data.filter((value) => value.y > 0)
    for (let index = 1; index < dataFiltered.length; index++) {
        avgIncrease = avgIncrease + (dataFiltered[index].y - dataFiltered[index-1].y)/dataFiltered[index-1].y
    }
    return (avgIncrease/(dataFiltered.length))*100
}