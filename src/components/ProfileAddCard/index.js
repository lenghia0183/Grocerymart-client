import classNames from 'classnames/bind';
import styles from './ProfileAddCard.module.scss';

import { BackArrow } from '../Icon';
import Button from '../Button';

const cx = classNames.bind(styles);

function ProfileAddCard({ onAddCard, className }) {
  return (
    <div className={cx('wrapper', { className })}>
      <div className={cx('title')}>
        <span
          onClick={() => {
            onAddCard('');
          }}
        >
          <BackArrow className={cx('back-arrow-icon')} />
        </span>
        <span>Add credit or debit card</span>
      </div>

      <form className={cx('add-card-form')}>
        <div className={cx('form-group')}>
          <label htmlFor="first-name">First Name</label>
          <input placeholder="" id="first-name" name="first-name" type="text" />
          <span className={cx('placeholder-fake')}>Imran</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="last-name">Last Name</label>
          <input placeholder="" id="last-name" name="last-name" type="text" />
          <span className={cx('placeholder-fake')}>Khan</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="card-number">Card Information</label>
          <input placeholder="" id="card-number" name="card-number" type="text" />
          <span className={cx('placeholder-fake')}>Card Number</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="expiration-date">Expiration Date</label>
          <input placeholder="" id="expiration-date" name="expiration-date" type="text" />
          <span className={cx('placeholder-fake')}>MM/YY</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="cvv">CVV</label>
          <input placeholder="" id="cvv" name="cvv" type="text" />
          <span className={cx('placeholder-fake')}>123</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="phone-number">Phone Number</label>
          <input placeholder="" id="phone-number" name="phone-number" type="text" />
          <span className={cx('placeholder-fake')}>017</span>
        </div>

        <div className={cx('buttons')}>
          <Button rounded className={cx('cancel-btn')}>
            Cancel
          </Button>
          <Button rounded>Save Card</Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileAddCard;
