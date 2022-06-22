import React from 'react'

import Match from './Match'
import EO from './EO'
import Parlay from './Parlay'
import Try from './Try'
import Boot from './Boot'

export default function GamePlay() {
    return (
        <div>
            <form action="">
                <h1 className="heading">Tournament</h1>
                <h3 className="sub-heading">Week: 1</h3>
                <h3 className="sub-heading">Player: Name</h3>
                <Match />
                <EO />
                <Parlay />
                <Try />
                <Boot />
            </form>
        </div>
    )
}
