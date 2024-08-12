import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const ResetCounter=({resetCounter})=>{



   
    return (
        <div className="reset" onClick={resetCounter}>
            <p> Reset Counter</p>
            <FontAwesomeIcon style={{color:"white"}} icon={faArrowRotateLeft} />
        </div>
    )
}


export default ResetCounter;