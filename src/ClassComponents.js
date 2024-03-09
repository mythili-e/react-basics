import React from 'react';

class ClassComponents extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

      changevalue = ()=>{
        this.setState({color:"green"})
      }

      
    render() {
      return (
        <>
            <h2>ClassComponents state {this.state.color}</h2>
            <button onClick={this.changevalue}>change state value</button>
        </>
      );

    }
  }

  export default ClassComponents;