import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../Button/Button';

export default function FeedbackOptions({ options, onLeaveFeedback, index }) {
  const OptionsArray = Object.keys(options);
  return (
    <>
      <ul className={s.list}>
        {OptionsArray.map(option => {
          return (
            <li key={index.random(1, 1000)} className={s.item}>
              <Button text={option} listener={() => onLeaveFeedback(option)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
};
