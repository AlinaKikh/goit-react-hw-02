import React from "react";
import PropTypes from "prop-types";
import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback, onReset }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};
  
  export default Options;