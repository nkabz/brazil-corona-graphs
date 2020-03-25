import data from '../resources/csvjson.json'
import { groupBy as _groupBy, mapValues as _mapValues } from 'lodash';
import moment from 'moment'

function groupBy(object, type) {
    return _mapValues(_groupBy(object, type), (groupedData) => groupedData.reduce((previousValue, currentValue) => {
        return {
            suspects: previousValue.suspects + currentValue.suspects,
            deaths: previousValue.deaths + currentValue.deaths,
            cases: previousValue.cases + currentValue.cases,
            refuses: previousValue.refuses + currentValue.refuses,
        }
    }));
}

function createPlotData (object, type) {
    return Object.keys(object).map((key) => {
        return {
            x: moment(key).format('YYYY-M-DD'),
            y: object[key][type],
            name: type
        }
    }).reverse()
}

function createStatePlotData (object) {
    return Object.keys(object).map((key) => {
        let state = object[key]
        return Object.keys(state).map((value) => {
            return {
                x: value,
                y: state[value],
                uf: key,
            }
        }).reverse()
    })
}
function createIncreaseMap (object, type) {
    return Object.keys(object).map((key) => {
        if (object[moment(key).subtract(1, 'day').format('YYYY-MM-DD')]) {
            let previous = object[moment(key).subtract(1, 'day').format('YYYY-MM-DD')][type]
            let increase = object[key][type] - previous

            return {
                x: moment(key).format('YYYY-M-DD'),
                y: increase
            }
        }
        return ''
    }).reverse()
}


const groupedByDate = groupBy(data, 'date')
const groupedByState = groupBy(data, 'uf')

const plotSuspectsByDate = createPlotData(groupedByDate, 'suspects')
const plotDeathsByDate = createPlotData(groupedByDate, 'deaths')
const plotCasesByDate = createPlotData(groupedByDate, 'cases')
const plotRefusesByDate = createPlotData(groupedByDate, 'refuses')
const plotStateData = createStatePlotData(groupedByState)
const plotIncreaseByDate = createIncreaseMap(groupedByDate, 'cases')

export {
    plotSuspectsByDate,
    plotDeathsByDate,
    plotCasesByDate,
    plotRefusesByDate,
    plotStateData,
}
