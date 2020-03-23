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

export default function Accumulative({width, mapData}) {

    const confirmedGraphData = createPlotGraph(mapData, 'confirmed');
    const deathGraphData = createPlotGraph(mapData, 'deaths')

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            width={width}
            height={550}
            domainPadding={50}
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
                tickLabelComponent={<VictoryLabel angle={-35} dy={10} style={{ data: { fontSize: 32 } }} />}
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
                        data: { stroke: "#00279c" },
                        labels: {
                            fill: "#00279c",
                            fontSize: 20,
                            padding: 5
                        }
                    }}
                />
                <VictoryLine
                    data={deathGraphData}
                    style={{
                        data: { stroke: "#9c000a" },
                        labels: {
                            fill: "#9c000a",
                            fontSize: 20,
                            padding: 5
                        }
                    }}
                />

        </VictoryChart>
    )
}
