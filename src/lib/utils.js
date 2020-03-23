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
            y: data[filteredValue].confirmed - data[filteredValue-1].confirmed
        }
    })
}