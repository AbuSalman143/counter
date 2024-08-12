import ResetCounter from "./ResetCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Counter=()=>{

    let [counter,setCounter]=useState(0);
    let [textValue,setTextValue] =useState("")
        let increement=()=>{
            setCounter(counter+1)
            if(counter===9){
                setTextValue("Not Add More then 10 items")
            }else{
                setTextValue("")
            }
        }
        let decreement=()=>{
            setCounter(counter-1)
            if(counter==1){
                setTextValue("Add Atleast 1 item")
            }else{
                setTextValue("")
            }
        }
        let resetCounter=()=>{
            setCounter(0)
            setTextValue("")
        }

    return(
        <>
        <div className="counter">
            <button onClick={increement} disabled={counter === 10}><FontAwesomeIcon icon={faPlus} /></button>
            <h1>{counter} {textValue}</h1>
            <button onClick={decreement}  disabled={counter === 0}><FontAwesomeIcon className="min" icon={faMinus}/></button>
        </div>
        <ResetCounter resetCounter={resetCounter}/>
        </>
    )
}

export default Counter;

