import React, { useState, useEffect } from 'react';
import { throttle as _throttle } from 'lodash';

import { getData } from '../lib/api';
import Accumulative from './Graphs/Accumulative';
import Increment from './Graphs/Increment';

function Graphs () {
    const [mapData, setMapData] = useState();
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = ev => {
        setWidth(ev.target.innerWidth);
    };

    async function retrieveData () {
        const apiData = await getData();
        setMapData(apiData);
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
        <Accumulative
            width={width}
            mapData={mapData}
        />
        : null

    const incrementGraph = mapData ?
        <Increment
            width={width}
            mapData={mapData}
        />
        : null

    return (
        <>
            <div className='mt-12'>
                <h1 className='text-xl text-gray-600 mx-auto text-center'>Número de casos / Tempo</h1>
                {chartGraph}
            </div>
            <div className='mt-20'>
                <h1 className='text-xl text-gray-600 mx-auto text-center'> Número de casos / Dia</h1>
                <h3 className='text-xs text-gray-500 mx-auto text-center'>Desde o primeiro caso</h3>
                {incrementGraph}
            </div>
        </>
    )
}

export default Graphs
