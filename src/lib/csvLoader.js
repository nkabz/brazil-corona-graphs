import data from '../resources/csvjson.json'
import { groupBy as _groupBy, mapValues as _mapValues, orderBy as _orderBy } from 'lodash';
import moment from 'moment'

import { translate } from './translate'

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
            name: translate(type)
        }
    }).reverse()
}

function createStatePlotData (type) {
    let groupedData = _groupBy(_orderBy(data, 'date', 'desc'), 'date')

    return groupedData[Object.keys(groupedData)[0]].map((state) => {
        return {
            x: state.uf,
            y: state[type],
            date: state.date,
            type: translate(type),
        }
    })
}

const groupedByDate = groupBy(data, 'date')

const plotSuspectsByDate = createPlotData(groupedByDate, 'suspects')
const plotDeathsByDate = createPlotData(groupedByDate, 'deaths')
const plotCasesByDate = createPlotData(groupedByDate, 'cases')
const plotRefusesByDate = createPlotData(groupedByDate, 'refuses')

export {
    plotSuspectsByDate,
    plotDeathsByDate,
    plotCasesByDate,
    plotRefusesByDate,
    createStatePlotData,
}
