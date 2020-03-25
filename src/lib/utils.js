export function createPlotGraph(data, type) {
    return Object.keys(data).map((key) => {
        return {
            x: data[key].date,
            y: data[key][type],
            name: type,
        }
    }).filter((value) => value.y > 0)
}

export function incrementPlotGraph(data, type) {
    return Object.keys(data).filter((value) => {
        return data[value][type] > 0;
    }).map((filteredValue, index) => {
        return {
            x: index + 1,
            y: data[filteredValue][type] - data[filteredValue - 1][type]
        }
    })
}


export function incrementAverage(data) {
    let avgIncrease = 0;

    for (let index = 1; index < data.length; index++) {
        let valueToAdd = data[index - 1].y === 0 ? 0 :  (data[index].y - data[index - 1].y) / data[index - 1].y;
        avgIncrease = avgIncrease + valueToAdd;
    }
    return ((avgIncrease / (data.length)) * 100).toFixed(2);
}