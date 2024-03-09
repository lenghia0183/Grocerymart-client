import classNames from 'classnames/bind';
import styles from './ProfilePassword.module.scss';
import { BackArrow } from '../Icon';
import Button from '../Button';

const cx = classNames.bind(styles);
function ProfilePassword() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper')}>
        <div className={cx('title')}>
          <span>{/* <BackArrow className={cx('back-arrow-icon')} /> */}</span>
          <span>Change password</span>
        </div>

        <form className={cx('change-password-form')}>
          <div className={cx('form-group')}>
            <label htmlFor="current-password">Current Password</label>
            <input placeholder="" id="current-password" name="current-password" type="text" />
            <span className={cx('placeholder-fake')}>ABC123</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="new-password">New Password</label>
            <input placeholder="" id="new-password" name="new-password" type="text" />
            <span className={cx('placeholder-fake')}>123456</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="confirm-password">confirm Password</label>
            <input placeholder="" id="confirm-password" name="confirm-password" type="text" />
            <span className={cx('placeholder-fake')}>123456</span>
          </div>

          <div className={cx('form-group')}>
            {/* <label htmlFor="phone-number">Phone Number</label>
        <input placeholder="" id="phone-number" name="phone-number" type="text" />
        <span className={cx('placeholder-fake')}>017</span> */}
          </div>

          <div className={cx('buttons')}>
            <Button rounded className={cx('cancel-btn')}>
              Cancel
            </Button>
            <Button rounded>Save Card</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePassword;
