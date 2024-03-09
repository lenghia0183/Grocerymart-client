import classNames from 'classnames/bind';
import styles from './CustomReviewCard.module.scss';
import { StartIcon } from '../../Icon';

const cx = classNames.bind(styles);
function CustomReviewCard({ data }) {
  console.log(data);
  return (
    <div className={cx('card-wrapper')}>
      <div className={cx('info-wrapper')}>
        <div className={cx('avatar-wrapper')}>
          <img src={data.avatar} alt={data.name} />
        </div>

        <div className={cx('info')}>
          <span className={cx('name')}>{data.name}</span>
          <p className={cx('review-comment')}>{data.comment}</p>
        </div>
      </div>

      <div className={cx('rating-wrapper')}>
        <div className={cx('starts')}>
          <StartIcon className={cx('start-icon')} />
          <StartIcon className={cx('start-icon')} />
          <StartIcon className={cx('start-icon')} />
          <StartIcon className={cx('start-icon')} />
          <StartIcon className={cx('start-icon')} />
        </div>

        <span className={cx('rating-point')}>{data.review}</span>
      </div>
    </div>
  );
}

export default CustomReviewCard;
