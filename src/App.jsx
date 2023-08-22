import './App.css'
import React from 'react'
import Display from './Components/Display.jsx'
import Keyboard from './Components/Keyboard.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      display: [],
      result: 0
    }
  }
  regex = /^\d*\.?\d*$/g;
  handleNumbers = (e) => {
    if (this.state.input.match(this.regex)){
    this.setState((prevState) => ({
      input: prevState.input.concat(e.target.innerHTML),
      result: 0 
    }))
  } else if (this.state.input === ''){
    this.setState((prevState) => ({
      input: prevState.input.concat(e.target.innerHTML),
      result: 0 
    }))
  } else {
    this.setState(() => ({
      input: e.target.innerHTML
    }))
  }
  }

  handleOperators = (e) => {
    if (this.state.input===''){

      this.setState((prevState)=> ({
        display: [prevState.result],
        result: 0,
        input: e.target.innerHTML
      }))
      
    } else {

    this.setState((prevState) => ({
      input: e.target.innerHTML,
      display: [...prevState.display, Number(prevState.input)]
  }))
    } 
    }

  handleClear = () => {
    this.setState({
      input: '',
      display: [],
      result: 0
    })
  }

  handleEquals = () => {
    this.setState((prevState) => ({
      input: '',
      display: [...prevState.display, Number(prevState.input)]
      }))
    this.setState((prevState) => ({
      result: prevState.display.reduce((acc, e) => acc + e, 0),
      display: []
      }))
  }



  render () {
    const { input, display, result } = this.state;
  return (
    <>
      <h1>Javascript Calculator</h1>
      <div id='calculator'>
      <Display 
      input={input} 
      display={display} 
      result={result}
      />
      <Keyboard input={input} result={result} 
      handleNumbers={this.handleNumbers} 
      handleOperators={this.handleOperators} 
      handleClear={this.handleClear}
      handleEquals={this.handleEquals}
      />
      </div>
    </>
    )
  }
}

export default App
