import classNames from 'classnames/bind';
import styles from './ProfileChangeInfo.module.scss';

import Button from '../Button';
import { BackArrow } from '../Icon';
const cx = classNames.bind(styles);

function ProfileChangeInfo({ onChangeInfo }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <span
          onClick={() => {
            onChangeInfo('');
          }}
        >
          <BackArrow className={cx('back-arrow-icon')} />
        </span>
        <span>Change Information</span>
      </div>

      <form className={cx('change-info-form')}>
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
          <label htmlFor="email">Email</label>
          <input placeholder="" id="email" name="email" type="text" />
          <span className={cx('placeholder-fake')}>Card Number</span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="phone-number">Phone number</label>
          <input placeholder="" id="phone-number" name="phone-number" type="text" />
          <span className={cx('placeholder-fake')}>0123456789</span>
        </div>

        <div className={cx('buttons')}>
          <Button rounded className={cx('cancel-btn')}>
            Cancel
          </Button>
          <Button rounded>Save Change</Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileChangeInfo;
