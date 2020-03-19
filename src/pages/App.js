import React from 'react';
import 'moment/locale/pt-br';

import Header from '../components/Header'
import Graphs from '../components/Graphs'

function App() {
    return (
        <div className="grid ">
            <Header />
            <div className="w-full p-2 md:w-10/12 grid grid-cols-1 mx-auto">
                <Graphs />
            </div>
        </div>
    );
}

export default App;
