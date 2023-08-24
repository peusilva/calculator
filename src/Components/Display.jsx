import "./Display.css";
import PropTypes from "prop-types";

const Display = ({ input, result }) => {
  return (
    <div id="display">
      <div id="resultDisplay">
        {(result === null && input === '') && 0}
        {result === null && input}
        {result}
        </div>
      <div id="inputDisplay">
        {result!== null && input}
        </div>
    </div>
  );
};

Display.propTypes = {
  input: PropTypes.string,
  display: PropTypes.number,
  result: PropTypes.number,
};

export default Display;
