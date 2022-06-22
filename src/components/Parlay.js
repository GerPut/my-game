import React from 'react'
import GamePlayStyle from './GamePlayStyle.css'

export default function Parlay() {
    return (
        <div>
            <h1 className="parlay-heading">Parlay</h1>
            <form action="">
                <div className="column-headings">
                    <table className="GeneratedTable parlay">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Player Pick</th>
                                <th>Result</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Double +100 |
                                    Triple +200 |
                                    Quad +300 |
                                    Five-Fold +500
                                </td>
                                <td><label htmlFor=""></label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="Double">Double</option>
                                        <option value="Triple">Triple</option>
                                        <option value="Quad">Quad</option>
                                        <option value="Five">Five-fold</option>
                                    </select>
                                </td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    )
}