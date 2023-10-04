import React from 'react'

function TakeDownAcc() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputTakeDownAccA" class="form-label">TakeDownAcc A</label>
                        <select id="inputTakeDownAccA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputTakeDownAccB" class="form-label">TakeDownAcc B</label>
                        <select id="inputTakeDownAccB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeDownAcc