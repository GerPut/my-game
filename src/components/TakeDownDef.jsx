import React from 'react'

function TakeDownDef() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputTakeDownDefA" class="form-label">TakeDownDef A</label>
                        <select id="inputTakeDownDefA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputTakeDownDefB" class="form-label">TakeDownDef B</label>
                        <select id="inputTakeDownDefB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeDownDef