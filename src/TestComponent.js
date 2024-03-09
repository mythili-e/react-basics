import { useState } from "react";
function Test(props){
    console.log(props);
    const[name,setName] = useState("HELLO WORLD");
    const testme=()=>{
        setName("HELLO REACT");
    }
    return(
        <>
        <p>{name}</p>
        <button onClick={testme}>Click</button>
        <p>{props.name}</p>
        <p>{props.mobileno}</p>
        </>
    );
}
export default Test;