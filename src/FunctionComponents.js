import { useState } from "react";
import Sample from "./Sample";
import FunctionalExamples from "./FunctionalExamples";

function FunctionComponents() {

    const[name,setName]=useState("ABCDE");
    const [number,setNumber]=useState(30);

    // const[goal,setGoal]=useState(true);

    // function MissedGoal() {
    //     return <h1>MISSED!</h1>;
    //   }

    //   function MadeGoal() {
    //     return (
    //         <>
    //         { name=== "ABCD" ? <p>{name}</p> : <p>TEst</p> }
    //          <h1>Goal!</h1>
    //     </>
    //     )
    //   }
      
    //   if(goal)
    //   {
    //     return <MadeGoal/>;
    //   }
    //   return <MissedGoal/>;

    return(
        <>
            <h1>function Component { name } { number }</h1>
            <Sample name={name} setName={setName}/>
            <FunctionalExamples number={number}/>
            
        </>
    )
}
export default FunctionComponents;