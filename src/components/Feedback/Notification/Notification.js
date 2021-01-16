import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Section({ message }) {
  return (
    <div className={s.container}>
      <span className={s.notification}>{message}</span>
    </div>
  );
}

Section.propTypes = {
  message: PropTypes.string,
};
