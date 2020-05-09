import React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryTheme,
    VictoryLabel,
    VictoryContainer,
    VictoryTooltip,
} from 'victory';

import { incrementPlotGraph, incrementAverage } from '../../lib/utils';

export default function Increment({ width, mapData, type, graphColor }) {
    const incrementData = incrementPlotGraph(mapData, type);
    const averageData = incrementAverage(incrementData);

    return (
        <>
            <VictoryChart
                theme={VictoryTheme.material}
                width={width}
                height={550}
                domainPadding={width < 652 ? 0 : 50}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                containerComponent={
                    <VictoryContainer
                        style={{touchAction: 'auto'}}
                    />
                }
            >
                <VictoryAxis
                    tickCount={5}
                    tickLabelComponent={<VictoryLabel style={{ data: { fontSize: 32 }, fontFamily: 'Raleway' }} />}
                />
                <VictoryAxis
                    style={{
                        tickLabels: { fontSize: 14, fontFamily: 'Raleway' }
                    }}
                    dependentAxis
                />
                <VictoryBar
                    data={incrementData}
                    labels={({ datum }) => Math.floor(datum.y)}
                    style={{
                        labels: { fill: `rgba(${graphColor}, 1)`, fontSize: () => width < 652 ? 12 : 14 },
                        data: {
                            fill: `rgba(${graphColor}, 0.5)`,
                            stroke: `rgba(${graphColor}, 1)`,
                            strokeWidth: 1,
                        },
                    }}
                    labelComponent={
                        <VictoryTooltip
                            flyoutStyle={{
                                stroke: '#d7d7d7',
                                fill: 'white',
                            }}
                        />
                    }
                />
            </VictoryChart>
            <div className='text-center italic'>
                <p className='text-xs text-gray-700 font-thin'>Aumento Percentual médio: <span className='text-xs font-bold ml-1' style={{ color: `rgba(${graphColor}, 1)` }}>{averageData}%</span></p>
            </div>
        </>
    )
}
