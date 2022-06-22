import React from 'react'
import GamePlayStyle from './GamePlayStyle.css'

export default function EO() {
    return (
        <div>
            <h1 className="eo-heading">Even or Odd</h1>
            <form action="">
                <div className="column-headings">
                    <table className="GeneratedTable">
                        <thead>
                            <tr>
                                <th>Matches</th>
                                <th>Player Picks</th>
                                <th>Match Result</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Match1</td>
                                <td><label htmlFor=""></label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="ODD">ODD</option>
                                        <option value="EVEN">EVEN</option>
                                    </select>
                                </td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <td>Match2</td>
                                <td><label htmlFor=""></label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="ODD">ODD</option>
                                        <option value="EVEN">EVEN</option>
                                    </select>
                                </td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <td>Match3</td>
                                <td><label htmlFor=""></label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="ODD">ODD</option>
                                        <option value="EVEN">EVEN</option>
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