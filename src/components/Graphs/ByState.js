import React from 'react'
import {
    VictoryChart,
    VictoryBar,
    VictoryGroup,
    VictoryTheme
} from 'victory'

import { plotStateData } from '../../lib/api'

export default function ByState() {

    return (
        <>
            {/* <VictoryChart
                theme={VictoryTheme.material}
            />
                <VictoryGroup horizontal
                    offset={10}
                    style={{ data: { width: 6 } }}
                >
                    {plotStateData.map((key) => {
                        return key.map((value) => {
                            return (
                                <VictoryBar
                                    data={value}
                                />
                            )
                        })
                    })}
                </VictoryGroup> */}
        </>
    )
}
