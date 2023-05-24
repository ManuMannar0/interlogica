import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Hello = () => <>HELLO</>
const By = (props) => {
  return props.text
}
class CompClass extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     bkg: 'red',
  //   }
  // }

  componentDidMount(){
    console.log('componentDidMount: il componenete è stato appena inserito nel DOM. Usalo per -sottoscrizioni- o per quelle cose che dipendono dal DOM')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate: il componenete è stato appena aggiornato. Usalo anche per quelle cose che dipendono dal DOM')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount: il componente sta per essere smontato ora. Tutto quello che deve -sparire- quando questo componente se ne va, tipo -sottoscrizioni-, -timer- ...')
  }

  render(){
    return((
      <>
        <Hello/> COMPONENT, <By text="By!" />
        {/* <div style={{backgroundColor: this.state.bkg}}>
          <button onClick={() => this.setState({count: ++this.state.count})}>Cambia stato -count- a : {this.state.count}</button>
          <button onClick={() => this.setState({bkg: this.state.bkg !== 'red' ? 'red' :  'white'})}>Cambia stato -bkg- a : {this.state.bkg}</button>
        </div> */}
      </>
    ))
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default CompClass;
