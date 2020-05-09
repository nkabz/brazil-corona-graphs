import React from 'react';
import {
    VictoryPie,
    VictoryTheme,
    VictoryTooltip
} from 'victory';

import { getLatestFormated } from '../../lib/utils';

export default function TotalPie ({ width, mapData }) {
    const pieData = getLatestFormated(mapData);

    function pieColorSelector (name) {
        console.log(name)
        const colors = {
            'Ativos': '#2196F3',
            'Mortes': '#D32F2F',
            'Recuperados': '#00BFA5',
        }

        return colors[name];
    }

    return (
        <VictoryPie
            theme={VictoryTheme.material}
            data={pieData}
            height={550}
            width={width}
            labels={({ datum }) => `${datum.x}:\n ${datum.y}`}
            style={{
                data: {
                    fillOpacity: 0.5,
                    stroke: "#e2e2e2",
                    strokeWidth: 2,
                    fill: (({ datum }) => pieColorSelector(datum.x) )
                },
                labels: {
                    fontSize: 16,
                    fill: (({ datum }) => pieColorSelector(datum.x) ),
                }
            }}
            labelComponent={
                <VictoryTooltip
                    flyoutStyle={{ fill: 'white' }}
                    constrainToVisibleArea={true}
                />
            }
        />
    )
}
