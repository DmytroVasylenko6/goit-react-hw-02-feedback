import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import shortid from 'shortid';
import Button from '../Button/Button';

export default function FeedbackOptions({ options, onLeaveFeedback, index }) {
  const OptionsArray = Object.keys(options);
  return (
    <>
      <ul className={s.list}>
        {OptionsArray.map(option => {
          const id = shortid.generate();
          return (
            <li key={id} className={s.item}>
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
