import React from 'react'

function WinLose() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <div className="col-md-3">
                            <label for="inputExperienceA" class="form-label">WINS A</label>
                            <select id="inputExperienceA" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="inputExperienceA" class="form-label">LOSSES A</label>
                            <select id="inputExperienceA" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 d-flex  align-items-center">
                        <div className="col-md-3">
                            <label for="inputExperienceB" class="form-label">WINS B</label>
                            <select id="inputExperienceB" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="inputExperienceB" class="form-label">LOSSES B</label>
                            <select id="inputExperienceB" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinLose