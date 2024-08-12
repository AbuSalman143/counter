


const PlusAndMinusTen=({add,sub,counter})=>{


    return(
        <div className="PlusMinusTen">
            <button onClick={add}>Plus 10</button>
            <button  onClick={sub} disabled={counter===9}>Minus 10</button>
        </div>
    )
}


export default PlusAndMinusTen;