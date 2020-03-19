import React, { useState, useEffect } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
    VictoryBar,
    VictoryTooltip,
    VictoryVoronoiContainer,
} from 'victory';
import { throttle as _throttle } from 'lodash';
import moment from 'moment';

import { getData } from '../lib/api';

function Graphs() {
    const [mapData, setMapData] = useState();
    const [pieData, setPieData] = useState();
    const [tickCount, setTickCount] = useState()
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = ev => {
        setWidth(ev.target.innerWidth);
    };

    async function retrieveData () {
        const apiData = await getData();

        setMapData(apiData.map((currentDate) => ({
            x: currentDate.date,
            y: currentDate.confirmed,
        })));

        setPieData([
            { x: 'Recuperados', y: apiData[apiData.length-1].recovered },
            { x: 'Mortes', y: apiData[apiData.length-1].deaths },
            { x: 'Confirmados', y: apiData[apiData.length-1].confirmed },
        ]);

        setTickCount(width < 500 ? Math.round((apiData.length / 10 + 1)) : Math.round((apiData.length / 5 + 1)))
    }
    /* eslint-disable */
    useEffect(() => {
        retrieveData()
        const interval = setInterval(() => {
            retrieveData()
        }, 14400000)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', _throttle(updateWidth, 600));

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);
    /* eslint-enable */
    const chartGraph = mapData ?
        <VictoryChart
            theme={VictoryTheme.material}
            width={width}
            height={550}
            domainPadding={50}
            animate={{
                duration: 2500,
                onLoad: { duration: 200 }
            }}
            containerComponent={
                <VictoryVoronoiContainer
                    labels={({datum}) => `${moment(datum.x).format('DD-MMM-YYYY').toString()}\nConfirmados: ${datum.y}`}
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={5}
                            flyoutStyle={{
                                stroke: '#d7d7d7',
                                fill: "none"
                            }}
                        />
                    }
                />
            }
        >
            <VictoryAxis
                tickCount={tickCount}
                tickLabelComponent={<VictoryLabel angle={-35} dy={10} style={{ data: { fontSize: 32}}} />}
            />
            <VictoryAxis
                style={{
                    tickLabels: {fontSize: 16},
                }}
                dependentAxis
            />
            <VictoryLine
                data={mapData}
                style={{
                    data: { stroke: "#c43a31" },
                    labels: {
                        fill: "#c43a31",
                        fontSize: 20,
                        padding: 5
                    }
                }}
            />
        </VictoryChart>
        : null

    const pieGraph = mapData ?
        <VictoryChart
            theme={VictoryTheme.material}
            height={550}
            width={width}
            domainPadding={100}
            animate={{
                duration: 1000,
                onLoad: { duration: 500 }
            }}
        >
            <VictoryAxis
            style={{
                tickLabels: {fontSize: 16},
            }}
            />
            <VictoryAxis
                dependentAxis
                style={{
                    tickLabels: {fontSize: 16},
                }}
            />
            <VictoryBar
                data={pieData}
                style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 1 }}}
                labels={({ datum }) => datum.y}
                labelComponent={(
                    <VictoryLabel dy={-10} style={{data: {fontSize: 20}}} />
                )}
            />
        </VictoryChart>
        : null

    return (
        <>
            <div className='mt-12'>
                <h1 className='text-xl text-gray-600 mx-auto text-center'>Número de casos / Tempo</h1>
                {chartGraph}
            </div>
            <div className='mt-20'>
                <h1 className='text-xl text-gray-600 mx-auto text-center'> Relação entre Confirmados, recuperados e mortes</h1>
                {pieGraph}
            </div>
        </>
    )
}

export default Graphs
