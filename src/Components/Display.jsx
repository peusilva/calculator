import "./Display.css";
import PropTypes from "prop-types";

const Display = ({ input, result }) => {
  return (
    <div id="display">
      <div id="resultDisplay">{result}</div>
      <div id="inputDisplay">{input}</div>
    </div>
  );
};

Display.propTypes = {
  input: PropTypes.string,
  display: PropTypes.number,
  result: PropTypes.number,
};

export default Display;
