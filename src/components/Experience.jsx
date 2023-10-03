import React from 'react'

function Experience() {
    return (
        <>
            <div className="col-12">
                <div className="d-flex row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label for="inputExperienceA" class="form-label">EXPERIENCE A</label>
                        <select id="inputExperienceA" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputExperienceB" class="form-label">EXPERIENCE B</label>
                        <select id="inputExperienceB" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience