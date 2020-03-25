import React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryTheme,
    VictoryLabel,
} from 'victory';

import { incrementPlotGraph } from '../../lib/utils';

export default function Increment({ width, mapData, type, graphColor }) {
    const incrementData = incrementPlotGraph(mapData, type);

    return (
        <>
            <VictoryChart
                theme={VictoryTheme.material}
                width={width}
                height={550}
                domainPadding={15}
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
                    horizontal
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
                    labelComponent={<VictoryLabel dx={15} />}
                />
            </VictoryChart>
    </>
    )
}
