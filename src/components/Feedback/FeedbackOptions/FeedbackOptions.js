import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../Button/Button';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const OptionsArray = Object.keys(options);
  return (
    <>
      <ul className={s.list}>
        {OptionsArray.map(option => {
          return (
            <li key={option} className={s.item}>
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
  index: PropTypes.func.isRequired,
};
