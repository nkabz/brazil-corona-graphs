import React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryTheme,
    VictoryLabel
} from 'victory';

import { incrementPlotGraph } from '../../lib/utils';

export default function Increment({ width, mapData }) {
    const incrementData = incrementPlotGraph(mapData, 'confirmed');
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
            style={{ labels: { fill: "black", fontSize: () => width < 500 ? 16 : 14  } }}
            labelComponent={<VictoryLabel dy={-15} />}
        />
        </VictoryChart>
    )
}
