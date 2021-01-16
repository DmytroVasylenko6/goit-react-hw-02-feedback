import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ text, listener }) {
  return (
    <button className={s.button} type="button" onClick={listener}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  listener: PropTypes.func,
};
