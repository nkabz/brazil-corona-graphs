import React, { useState, useEffect } from 'react';
import { throttle as _throttle } from 'lodash';

import { getData } from '../lib/api';
import Accumulative from './Graphs/Accumulative';
import Increment from './Graphs/Increment';
import TotalPie from './Graphs/TotalPie'

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

    const incrementConfirmedGraph = mapData ?
        <Increment
            width={width}
            mapData={mapData}
            type='confirmed'
            graphColor='52, 158, 235'
        />
        : null

    const incrementDeathMap = mapData ?
        <Increment
            width={width}
            mapData={mapData}
            type='deaths'
            graphColor='230, 48, 78'
        />
        : null
    const totalPie = mapData ?
        <TotalPie
            width={width}
            mapData={mapData}
        />
        : null

    return (
        <>
            <div className='mt-12'>
                <h1 className='text-xl text-gray-600 mx-auto text-center'>Evolução Covid-19 / Dia</h1>
                {chartGraph}
            </div>
            <div className='mt-20'>
                <h1 className='text-xl text-blue-600 mx-auto text-center'>Incremento no número de casos confirmados / Dia</h1>
                <h3 className='text-xs text-blue-400 mx-auto text-center'>Desde o primeiro caso</h3>
                {incrementConfirmedGraph}
            </div>
            <div className='mt-20'>
                <h1 className='text-xl text-red-600 mx-auto text-center'>Incremento no número de mortes / Dia</h1>
                <h3 className='text-xs text-red-400 mx-auto text-center'>Desde a primeira morte</h3>
                {incrementDeathMap}
            </div>
            <div className='mt-20'>
                <h1 className='text-xl text-green-600 mx-auto text-center'>Relação Confirmados/Mortes/Recuperados</h1>
                <h3 className='text-xs text-green-400 mx-auto text-center mb-10'>Números Totais</h3>
                {totalPie}
            </div>
        </>
    )
}

export default Graphs
