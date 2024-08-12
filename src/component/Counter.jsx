import ResetCounter from "./ResetCounter";
import PlusAndMinusTen from "./PlusAndMinusTen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Counter=()=>{

// const add=[add,setAdd];useState(0)




    let [counter,setCounter]=useState(0);
    let [textValue,setTextValue] =useState("")
        let increement=()=>{
            setCounter(counter+1)
            // if(counter===9){
            //     setTextValue("Not Add More then 10 items")
            // }else{
            //     setTextValue("")
            // }
        }
        let decreement=()=>{
            setCounter(counter-1)
            // if(counter==1){
            //     // setTextValue("Add Atleast 1 item")
            // }else{
            //     setTextValue("")
            // }
        }
        let resetCounter=()=>{
            setCounter(0)
            // setTextValue("")
        }
        let addTen=()=>{
            setCounter(counter+10)
        }
        let subtractTen=()=>{
            setCounter(counter-10);
        }

    return(
        <>
        <div className="counter">
            <button onClick={increement} ><FontAwesomeIcon icon={faPlus} /></button>
            <h1>{counter} {textValue}</h1>
            <button onClick={decreement}  ><FontAwesomeIcon className="min" icon={faMinus}/></button>
        </div>
        <PlusAndMinusTen add={addTen} sub={subtractTen}/>
        <ResetCounter resetCounter={resetCounter}/>
        </>
    )
}

export default Counter;

