import React from 'react'

function PreviousOppWL() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputPreviousOppWLA" class="form-label">PreviousOppWL A</label>
                        <select id="inputPreviousOppWLA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputPreviousOppWLB" class="form-label">PreviousOppWL B</label>
                        <select id="inputPreviousOppWLB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviousOppWL