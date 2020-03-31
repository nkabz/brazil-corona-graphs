import React from 'react';
import 'moment/locale/pt-br';

import Header from '../components/Header'
import Graphs from '../components/Graphs'

import GithubLogo from '../assets/GitHub-Mark-64px.png'
import '../css/App.css'

function App() {
    return (
        <div className="grid min-h-screen" style={{placeItems: 'center'}}>
            <Header />
            <div className="w-full p-2 md:w-10/12 grid grid-cols-1">
                <Graphs />
            </div>
            <div className="my-16">
                <p className='text-xs text-gray-600 text-center opacity-75'>
                    Dados coletados de <a className='text-blue-700' href="https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series">https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series</a>
                </p>
                <p className='text-xs font-semibold text-gray-800 text-center my-8'>
                    #FiqueEmCasa
                </p>
                <div className='w-10 h-10 mx-auto'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href="https://github.com/nkabz/brazil-corona-graphs"
                    >
                        <img className='hover:opacity-75 transition-opacity duration-200' src={GithubLogo} alt="Github"/></a>
                </div>
            </div>
        </div>
    );
}

export default App;
