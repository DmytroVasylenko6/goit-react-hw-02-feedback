import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={s.list}>
        <li key="1" className={s.item}>
          Good: <span className={s.number}>{good}</span>
        </li>
        <li key="2" className={s.item}>
          Neutral: <span className={s.number}>{neutral}</span>
        </li>
        <li key="3" className={s.item}>
          Bad: <span className={s.number}>{bad}</span>
        </li>
        <li key="4" className={s.item}>
          Total: <span className={s.number}>{total}</span>
        </li>
        <li key="5" className={s.item}>
          PositivePercentage:{' '}
          <span className={s.number}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
