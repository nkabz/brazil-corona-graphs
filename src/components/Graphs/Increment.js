import React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryTheme,
    VictoryLabel,
    VictoryContainer,
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
                domainPadding={width < 500 ? 10 : 50}
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
                        labels: { fill: `rgba(${graphColor}, 1)`, fontSize: () => width < 500 ? 8 : 14, fontFamily: 'Raleway' },
                        data: {
                            fill: `rgba(${graphColor}, 0.5)`,
                            stroke: `rgba(${graphColor}, 1)`,
                            strokeWidth: 1,
                        },
                    }}
                    labelComponent={<VictoryLabel dy={width < 500 ? 4 : -15} dx={width < 500 ? 18 : 0} angle={width < 500 ? -90 : 0} />}
                />
            </VictoryChart>
            <div className='text-center italic'>
                <p className='text-xs text-gray-700 font-thin'>Aumento Percentual médio: <span className='text-xs font-bold ml-1' style={{ color: `rgba(${graphColor}, 1)` }}>{averageData}%</span></p>
            </div>
        </>
    )
}
