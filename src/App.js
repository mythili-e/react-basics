// import logo from './logo.svg';
import './App.css';
import Forms from './Forms';
import Formstest from './formscomponents';
// import ClassComponents from './ClassComponents';

// import Sample from './Sample';
// import FunctionComponents from './FunctionComponents';
// import FunctionalExamples from './FunctionalExamples'; 
import Car from './Props';
import Test from './TestComponent';
function App() {
  const name = "karthik";
  return (
    <div className="App">
      {/* <div><Sample /></div>
      <div>content</div>
      <div>footer</div> */}
      {/* <ClassComponents/> */}
      {/* <FunctionComponents/> */}
      {/* <FunctionalExamples/> */}
      <Test name={name} mobileno="1234567890" data="[1,2,3,4,5]"/>
      <Car/>
      <Forms/>
      <Formstest/>
    </div>

  );
}

export default App;
