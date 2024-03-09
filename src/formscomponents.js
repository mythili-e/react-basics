import { useState } from "react";
function Formstest(){
    
    //const[name,setName]=useState("");
    const[inputs,setInputs]=useState({});
    // const[textarea, setTextarea] = useState("");
    const[fruits , setfruits] = useState("Apple");

    const changeHandle = (event) => {
        const name= event.target.name;
        const value=event.target.value;    
        setInputs(values =>({...values, [name] : value }))
        console.log(inputs);
        
    //    setTextarea(event.target.value)
    //    console.log(textarea);
        
       // setfruits(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" name="username" onChange={changeHandle}/>
        <label>Enter your age:</label>
        <input type="text" name="age" onChange={changeHandle}/>
        <textarea name="address" onChange={changeHandle}/>

        <select name="fruits" onChange={changeHandle}>
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Grapes">Grapes</option>
        </select>
        
               
        <input type="submit"/>
       </form>
    );
}
export default Formstest;