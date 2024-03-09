import { useState } from "react";
function Examplesfunction(props){

    const[name,setName]=useState("React!");

    const clickHere=()=>{
        setName("WE LOVE REACT");

    }
    if(props.number === 20) {
        return(
            <>
            <h1>Hello{name}</h1>
            <p>We hate React</p>
            </>
        )
    }
    return(
        <>
            <h1>Hello{name}</h1>
            <p>We love React</p>
            <p>{props.number}</p>
            <button onClick={clickHere}>Clickhere</button>
        </>
    )
} 
export default Examplesfunction;