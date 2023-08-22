import './Keyboard.css'
import PropTypes from 'prop-types';

const Keyboard = ({handleClear, handleNumbers, handleOperators, handleEquals }) => {
  return (
    <div id='keyboard'>
    <button id="clear" onClick={handleClear}>AC</button>
    <button id="divide" onClick={handleOperators}>/</button>
    <button id="multiply" onClick={handleOperators}>x</button>
    <button id="seven" onClick={handleNumbers}>7</button>
    <button id="eight" onClick={handleNumbers}>8</button>
    <button id="nine" onClick={handleNumbers}>9</button>
    <button id="subtract" onClick={handleOperators}>-</button>
    <button id="four" onClick={handleNumbers}>4</button>
    <button id="five" onClick={handleNumbers}>5</button>
    <button id="six" onClick={handleNumbers}>6</button>
    <button id="add" onClick={handleOperators}>+</button>
    <button id="one" onClick={handleNumbers}>1</button>
    <button id="two" onClick={handleNumbers}>2</button>
    <button id="three" onClick={handleNumbers}>3</button>
    <button id="equals" onClick={handleEquals}>=</button>
    <button id="zero" onClick={handleNumbers}>0</button>
    <button id="decimal" onClick={handleNumbers}>.</button>
    
    </div>
  )
}

Keyboard.propTypes = {
  handleOperators: PropTypes.func,
  handleClear: PropTypes.func,
  handleNumbers: PropTypes.func,
  handleEquals: PropTypes.func
}

export default Keyboard