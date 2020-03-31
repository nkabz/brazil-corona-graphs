import React from 'react'
import moment from 'moment'
import {
    VictoryChart,
    VictoryVoronoiContainer,
    VictoryTheme,
    VictoryArea,
    VictoryTooltip,
    VictoryAxis,
    VictoryLabel,
    VictoryGroup,
    VictoryScatter,
} from 'victory'

import { translate } from '../../lib/translate'
import { createPlotGraph } from '../../lib/utils'

export default function Accumulative({ width, mapData }) {

    const confirmedGraphData = createPlotGraph(mapData, 'confirmed');
    const deathGraphData = createPlotGraph(mapData, 'deaths')

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            width={width}
            height={550}
            domainPadding={width < 500 ? 10 : 50}
            padding={60}
            animate={{
                duration: 1500,
                onLoad: { duration: 1500 }
            }}
            containerComponent={
                <VictoryVoronoiContainer
                    style={{touchAction: 'auto'}}
                />
            }
        >
            <VictoryAxis
                tickCount={5}
                tickFormat={(label) => `${moment(label, 'YYYY/MM/DD').format('DD-MM')}\n${moment(label, 'YYYY/MM/DD').format('YYYY')}`}
                tickLabelComponent={
                    <VictoryLabel
                        style={{ data: { fontSize: 32 } }}
                    />
                }
            />
            <VictoryAxis
                style={{
                    tickLabels: { fontSize: 14 },
                }}
                dependentAxis
            />
            <VictoryGroup
                data={confirmedGraphData}
                color='rgba(52, 158, 235, 1)'
                labels={({ datum }) => `${moment(datum.x, 'YYYY/MM/DD').format('DD-MM-YYYY')}\n${translate(datum.name)}: ${Math.floor(datum.y)}`}
                style={{touchAction: 'auto'}}
                labelComponent={
                    <VictoryTooltip
                        style={{
                            fontSize: width < 500 ? 12 : 14,
                            fill: 'rgba(52, 158, 235, 1)',
                        }}
                        cornerRadius={5}
                        centerOffset={{ x: (datum) => {
                            return datum.x < 250 ? 15 : -15
                        }}}
                        flyoutStyle={{
                            stroke: '#d7d7d7',
                            fill: 'white',
                        }}
                    />
                }
            >
                <VictoryArea
                    name='areaConfirmed'
                    style={{
                        data: { stroke: 'rgba(52, 158, 235, 1)', fill: 'rgba(52, 158, 235, 0.2)' },
                        labels: {
                            fill: 'rgba(52, 158, 235, 1)',
                            fontSize: 20,
                            padding: 5
                        }
                    }}
                />
                <VictoryScatter
                    name='scatterConfirmed'
                    size={({ active }) => active ? 5 : 3}
                    style={{
                        data: {
                            stroke: 'rgba(52, 158, 235, 1)',
                            fill: '#ffffff',
                            strokeWidth: '1px',
                        },
                    }}
                />
            </VictoryGroup>
            <VictoryGroup
                data={deathGraphData}
                color='rgba(230, 48, 78, 1)'
                labels={({ datum }) => `${moment(datum.x, 'YYYY/MM/DD').format('DD-MM-YYYY')}\n${translate(datum.name)}: ${Math.floor(datum.y)}`}
                style={{touchAction: 'auto'}}
                labelComponent={
                    <VictoryTooltip
                        style={{
                            fontSize: width < 500 ? 12 : 14,
                            fill: 'rgba(230, 48, 78, 1)',
                        }}
                        cornerRadius={5}
                        centerOffset={{ x: (datum) => {
                            return datum.x < 250 ? 15 : -15
                        }}}
                        flyoutStyle={{
                            stroke: '#d7d7d7',
                            fill: 'white',
                        }}
                    />
                }
            >
                <VictoryArea
                    name='areaDeath'
                    style={{
                        data: { stroke: "rgba(230, 48, 78, 1)", fill: "rgba(230, 48, 78, 0.4)" },
                        labels: {
                            fill: "rgba(230, 48, 78, 1)",
                            fontSize: 20,
                            padding: 5
                        }
                    }}
                />
                <VictoryScatter
                    name='scatterDeath'
                    size={({ active }) => active ? 5 : 3}
                    style={{
                        data: {
                            stroke: 'rgba(230, 48, 78, 1)',
                            fill: '#ffffff',
                            strokeWidth: '1px',
                        },
                    }}
                />
            </VictoryGroup>
        </VictoryChart>
    )
}
