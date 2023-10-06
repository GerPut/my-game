import React from 'react'
import Age from '../Age'
import Experience from '../Experience'
import WinLose from '../WinLose'
import Streak from '../Streak'
import Reach from '../Reach'
import LastActive from '../LastActive'
import StrikeAcc from '../StrikeAcc'
import StrikeDef from '../StrikeDef'
import TakeDownAcc from '../TakeDownAcc'
import TakeDownDef from '../TakeDownDef'
import PreviousOppWL from '../PreviousOppWL'
import Other from '../Other'

const FFCalculator = () => {
    return (
        <>
            <h3 className="text-center app__navbar-logo ">FIGHT FURNACE</h3>
            <div className="col-12">
                <div>
                    Select Your Criteria
                </div>
                <div className="d-flex row">
                    <div className="d-flex justify-content-center align-items-center">
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Age</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Experience</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Win/Lose Ratio</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Streak</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Reach</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Last Active</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Stike Accuracy</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Stike Defense</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Takedown Accuracy</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Takedown Defense</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Previous Opponents W/L</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                        <div class="row align-items-center justify-content-evenly">
                            <label for="labelDemo">Other</label>
                            <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                        </div>
                    </div>
                </div>


                <div className="d-flex row justify-content-center align-items-center">
                    <div class="col-md-3">
                        <label for="nameA" class="form-label">NAME A</label>
                        <input type="text" class="form-control" id="nameA" />
                    </div>
                    <div class="col-md-3">
                        <label for="NameB" class="form-label">NAME B</label>
                        <input type="tex" class="form-control" id="nameB" />
                    </div>
                </div>
                <Age />
                <Experience />
                <WinLose />
                <Streak />
                <Reach />
                <LastActive />
                <StrikeAcc />
                <StrikeDef />
                <TakeDownAcc />
                <TakeDownDef />
                <PreviousOppWL />
                <Other />
            </div>


        </>
    )
}

export default FFCalculator