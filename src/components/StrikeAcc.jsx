import React from 'react'

function StrikeAcc() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputStrikeAccA" class="form-label">StrikeAcc A</label>
                        <select id="inputStrikeAccA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputStrikeAccB" class="form-label">StrikeAcc B</label>
                        <select id="inputStrikeAccB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrikeAcc