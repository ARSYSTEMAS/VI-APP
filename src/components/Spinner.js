import React from 'react'


const Spinner = () => {


    return(


        <div className="text-center">
            <div className="spinner-border text-primary" style={{width: "4rem", height: "4rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
}

export default Spinner;