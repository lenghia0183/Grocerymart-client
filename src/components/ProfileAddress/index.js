import classNames from 'classnames/bind';
import styles from './ProfileAddress.module.scss';
import { BackArrow } from '../Icon';
import Button from '../Button';
const cx = classNames.bind(styles);

function ProfileAddress() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper')}>
        <div className={cx('title')}>
          <span>{/* <BackArrow className={cx('back-arrow-icon')} /> */}</span>
          <span>Change Addresses</span>
        </div>

        <form className={cx('change-address-form')}>
          <div className={cx('form-group')}>
            <label htmlFor="house-number">House number</label>
            <input placeholder="" id="house-number" name="house-number" type="text" />
            <span className={cx('placeholder-fake')}>401</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="name-street">Name Street</label>
            <input placeholder="" id="name-street" name="name-street" type="text" />
            <span className={cx('placeholder-fake')}>HO CHI MINH</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="district">District</label>
            <input placeholder="" id="district" name="district" type="text" />
            <span className={cx('placeholder-fake')}>ABC</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="city">City/Province</label>
            <input placeholder="" id="city" name="city" type="text" />
            <span className={cx('placeholder-fake')}>HA NOI</span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="country">Country</label>
            <input placeholder="" id="country" name="country" type="text" />
            <span className={cx('placeholder-fake')}>VIET NAM</span>
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

export default ProfileAddress;
