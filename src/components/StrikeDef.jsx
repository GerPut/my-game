import React from 'react'

function StrikeDef() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputStrikeDefA" class="form-label">StrikeDef A</label>
                        <select id="inputStrikeDefA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputStrikeDefB" class="form-label">StrikeDef B</label>
                        <select id="inputStrikeDefB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrikeDef