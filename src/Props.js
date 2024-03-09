import './App.js';
import Sample from './Sample.js';
function Car(){
    const cars=['Ford', 'BMW', 'Audi'];
    return(
        <>
        <Sample cars={cars}/>
        </>
    )
}
export default Car;