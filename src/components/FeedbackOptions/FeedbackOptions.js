import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick, options }) => {
  return options.map(option => (
    <button className={s.button} key={option} onClick={() => onClick(option)}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
