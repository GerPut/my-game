import React from 'react'
import Age from '../Age'
import Experience from '../Experience'
import WinLose from '../WinLose'
import Streak from '../Streak'
import Reach from '../Reach'

const FFCalculator = () => {
    return (
        <>
            <h3 className="text-center app__navbar-logo ">FIGHT FURNACE</h3>
            <div className="col-12">
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
            </div>


        </>
    )
}

export default FFCalculator