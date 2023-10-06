import React from 'react'

function Other() {
    return (
        <>
            <div>Other</div>
            <div className="d-flex justify-content-center align-items-center">
                <div class="row align-items-center justify-content-evenly">
                    <label for="labelDemo">Weak Chin</label>
                    <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                </div>
                <div class="row align-items-center justify-content-evenly">
                    <label for="labelDemo" >Bad Cardio</label>
                    <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                </div>
                <div class="row align-items-center justify-content-evenly">
                    <label for="labelDemo" >Debut</label>
                    <input id="labelDemo" type="checkbox" data-toggle="toggle" data-size="xs" />
                </div>
            </div>
        </>
    )
}

export default Other