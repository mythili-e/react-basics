import './App.css';
function Sample(props) {
  const changevalue = ()=>{
    props.setName("XYZ");
  }
    return (
      <div className="Sample">
        <div>Menu</div>
        <div>{props.name}</div>
        <button onClick={changevalue}>change state value</button>
        <ol>
          {props.cars.map((x)=> <li>{x}</li>)}
        </ol>
      </div>
    );
  }
export default Sample;