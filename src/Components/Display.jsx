import './Display.css'
import PropTypes from 'prop-types';

const Display = ({ input, display, result}) => {
  return (
    <div id="display">
      <div id='resultDisplay'>
      {display}
      {result!==0 && result}
      </div>
      <div id='inputDisplay'>
        {input}
      </div>
      </div>
  )
}

Display.propTypes = {
  input: PropTypes.string,
  display: PropTypes.array,
  result: PropTypes.number
}

export default Display