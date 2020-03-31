import React from 'react'
import {
    VictoryChart,
    VictoryScatter,
    VictoryTheme,
    VictoryAxis,
    VictoryLabel,
    VictoryVoronoiContainer,
    VictoryTooltip,
} from 'victory'

import { createStatePlotData } from '../../lib/csvLoader'

export default function ByState({width, graphColor, type}) {
    const scatterData = createStatePlotData(type)

    return (
        <>
            <VictoryChart
                theme={VictoryTheme.material}
                width={width}
                height={550}
                domainPadding={width < 500 ? 10 : 50}
                containerComponent={
                    <VictoryVoronoiContainer
                        labels={({datum}) => `${datum.x}\n${datum.type}: ${datum.y}`}
                        style={{touchAction: 'auto', fontFamily: 'Raleway'}}
                        labelComponent={
                            <VictoryTooltip
                                style={{fontSize: width < 500 ? 12 : 14, fill: `rgba(${graphColor}, 1)`}}
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
                    />
                }
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryAxis
                    tickLabelComponent={
                        <VictoryLabel
                            dx={width < 500 ? -5 : 0} dy={width < 500 ? -5 : 0}
                            angle={width < 600 ? -90 : 0}
                            style={{ fontSize: width < 600 ? 10 : 14 }}
                        />
                    }
                />
                <VictoryAxis
                    dependentAxis
                />
                <VictoryScatter
                    style={{data: {fill: `rgba(${graphColor}, 1)`}}}
                    data={scatterData}
                />
            </VictoryChart>
        </>
    )
}
