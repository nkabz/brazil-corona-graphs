import React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryTheme,
    VictoryLabel,
} from 'victory';

import { incrementPlotGraph, incrementAverage } from '../../lib/utils';

export default function Increment({ width, mapData, type, graphColor }) {
    const incrementData = incrementPlotGraph(mapData, type);
    const averageData = incrementAverage(incrementData);



    return (
        <>
            <div className='relative inline-block text-center z-20' style={{top: 100, left: 60, color: `rgba(${graphColor}, 1)`}}>
                <p className='text-xs font-thin md:inline-block'>Aumento Percentual médio </p><p className='text-sm font-bold md:inline-block md: ml-1'>{averageData}%</p>
            </div>
            <VictoryChart
                theme={VictoryTheme.material}
                width={width}
                height={550}
                domainPadding={50}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryAxis
                    tickCount={5}
                    tickLabelComponent={<VictoryLabel style={{ data: { fontSize: 32 } }} />}
                />
                <VictoryAxis
                    style={{
                        tickLabels: { fontSize: 16 },
                    }}
                    dependentAxis
                />
                <VictoryBar
                    data={incrementData}
                    labels={({ datum }) => datum.y}
                    style={{
                        labels: { fill: `rgba(${graphColor}, 1)`, fontSize: () => width < 500 ? 8 : 16 },
                        data: {
                            fill: `rgba(${graphColor}, 0.5)`,
                            stroke: `rgba(${graphColor}, 1)`,
                            strokeWidth: 1,
                        }
                    }}
                    labelComponent={<VictoryLabel dy={-15} />}
                />
            </VictoryChart>
        </>
    )
}
