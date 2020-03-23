import React from 'react'
import moment from 'moment'
import {
    VictoryChart,
    VictoryVoronoiContainer,
    VictoryTheme,
    VictoryLine,
    VictoryTooltip,
    VictoryAxis,
    VictoryLabel,
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
            domainPadding={50}
            padding={60}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            containerComponent={
                <VictoryVoronoiContainer
                    labels={({ datum }) => `${moment(datum.x, 'YYYY/MM/DD').format('DD-MM-YYYY')}\n${translate(datum.name)}: ${datum.y}`}
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={5}
                            flyoutStyle={{
                                stroke: '#d7d7d7',
                                fill: "white"
                            }}
                        />
                    }
                />
            }
        >
            <VictoryAxis
                tickCount={5}
                tickFormat={(label) => `${moment(label, 'YYYY/MM/DD').format('DD-MM')}\n${moment(label, 'YYYY/MM/DD').format('YYYY')}`}
                tickLabelComponent={
                    <VictoryLabel
                        angle={-35}
                        style={{ data: { fontSize: 32 } }}
                    />
                }
            />
            <VictoryAxis
                style={{
                    tickLabels: { fontSize: 16 },
                }}
                dependentAxis
            />
            <VictoryLine
                data={confirmedGraphData}
                style={{
                    data: { stroke: "#4791db" },
                    labels: {
                        fill: "#4791db",
                        fontSize: 20,
                        padding: 5
                    }
                }}
            />
            <VictoryLine
                data={deathGraphData}
                style={{
                    data: { stroke: "#e33371" },
                    labels: {
                        fill: "#e33371",
                        fontSize: 20,
                        padding: 5
                    }
                }}
            />

        </VictoryChart>
    )
}
