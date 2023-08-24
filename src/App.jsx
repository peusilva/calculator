import "./App.css";
import React from "react";
import Display from "./Components/Display.jsx";
import Keyboard from "./Components/Keyboard.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: null,
      lastOp: "",
    };
  }
  regex = /^[\d-]*\.?\d*$/g;
  handleNumbers = (e) => {
    if (this.state.input.match(this.regex) || this.state.input === '-') {
      if (e.target.innerHTML === '0' && this.state.input === '0'){
        return
      } else {
        this.setState((prevState) => ({
          input: prevState.input.concat(e.target.innerHTML),
        }));
      }
    } else if (this.state.input === "") {
      this.setState((prevState) => ({
        input: prevState.input.concat(e.target.innerHTML),
      }));
    } else {
      this.setState(() => ({
        input: e.target.innerHTML,
      }));
    }
  };

  handleDecimals = (e) => {
    if (!this.state.input.includes('.')){
      this.setState((prevState) => ({
        input: prevState.input.concat(e.target.innerHTML),
      }));
    }
  }

  handleOperators = (e) => {
    if (this.state.input === "" || this.state.input === "-") {
      this.setState(() => ({
        input: e.target.innerHTML,
      }));
    } else if (this.state.result === null) {
      this.handleEquals();
      this.setState((prevState) => ({
        result: Number(prevState.input),
      }));
    } else {
      this.handleEquals();
    }
    this.setState({
      lastOp: e.target.innerHTML,
      input: e.target.innerHTML,
    });
  };

  handleClear = () => {
    this.setState({
      input: "",
      result: null,
      lastOp: "",
    });
  };

  handleSubtraction = () => {
    if(this.state.input === ''){
      this.setState({
        input: '-'
      })
    } else if(this.state.result === null){ 
      this.setState((prevState) => ({
        result: Number(prevState.input),
        input: '-',
        lastOp: '+'
      }));
  
    } else if (this.state.input.match(this.regex) || this.state.input[0] === '-'){
      this.handleEquals();
      this.setState({
        input: '-',
        lastOp: '+'
      })
    } else if (this.state.input[0] === '+' ||
    this.state.input[0] === 'x' ||
    this.state.input[0] === '/' 
      ){
        this.setState({
          input: '-'
        })
      }
  };

  handleEquals = () => {
    if (this.state.input[0] === '+' ||
    this.state.input[0] === 'x' ||
    this.state.input[0] === '/' 
      ) return;
    switch (this.state.lastOp) {
      case "+":
        this.setState((prevState) => ({
          input: "",
          result: Number(prevState.input) + Number(prevState.result),
        }));
        break;

      case "-":
        if (this.state.input === ''){
          this.setState(() => ({
            input: "-"
          }));
        } else {
          this.setState((prevState) => ({
            input: '-' + prevState.input
          }));
        this.setState((prevState) => ({
          input: "",
          result: Number(prevState.result) + Number(prevState.input),
        }));
      }
        break;

      case "x":
        this.setState((prevState) => ({
          input: "",
          result: Number(prevState.result) * Number(prevState.input),
        }));
        break;

      case "/":
        this.setState((prevState) => ({
          input: "",
          result: Number(prevState.result) / Number(prevState.input),
        }));
        break;

      default:
        return;
    }
    console.log("equals ran");
  };

  render() {
    const { input, result, lastOp } = this.state;
    return (
      <>
        <h1>Javascript Calculator</h1>
        <div id="calculator">
          <Display input={input} result={result} />
          <Keyboard
            input={input}
            result={result}
            handleNumbers={this.handleNumbers}
            handleOperators={this.handleOperators}
            handleClear={this.handleClear}
            handleEquals={this.handleEquals}
            handleDecimals={this.handleDecimals}
            handleSubtraction={this.handleSubtraction}
          />
          {console.log(input, result, lastOp)}
        </div>
      </>
    );
  }
}
export default App;
