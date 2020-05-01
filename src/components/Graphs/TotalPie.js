import React from 'react';
import {
    VictoryPie,
    VictoryTheme,
    VictoryAxis,
    VictoryLabel,
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
            style={{
                data: {
                  fillOpacity: 0.9, stroke: "#eee", strokeWidth: 3, fill: (({datum}) => pieColorSelector(datum.x) )
                },
                labels: {
                  fontSize: 16, fill: (({datum}) => pieColorSelector(datum.x) )
                }
              }}
        />
    )
}
