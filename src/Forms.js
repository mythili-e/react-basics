import { useState } from "react";

function Forms() {
    const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});
    // const handleChange =(e)=>{
    //     setName(e.target.value);
    // }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    //   console.log(inputs,'inputs');
    const handleSubmit = (event) => {
        event.preventDefault();
       console.log(name);
      }
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input type="text" name="username" onChange={handleChange}/>
        <label>Age</label>
        <input type="text" name="age" onChange={handleChange}/>
        <input type="submit" />
      </form>
    )
  }

  export default Forms;