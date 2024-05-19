import classNames from 'classnames/bind';
import styles from './userAddressForm.module.scss';

import { useRef, useCallback, useState } from 'react';
import Button from '../Button';
import ComboBox from '../ComboBox/ComboBox';

const cx = classNames.bind(styles);

function UserAddressForm({ onCloseForm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleResetValue = () => {
    setName('');
    setPhone('');
    setAddress('');
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'phone') {
      setPhone(value);
    }

    if (name === 'address') {
      setAddress(value);
    }
  };

  return (
    <div className={cx('add-address-form')}>
      <div className={cx('row')}>
        <div className={cx('form-group')}>
          <label>Họ tên</label>
          <input
            value={name}
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Họ tên"
            onChange={(e) => {
              handleValueChange(e);
            }}
          />
        </div>

        <div className={cx('form-group')}>
          <label>Số điện thoại</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Điện thoại"
            name="phone"
            value={phone}
            onChange={(e) => {
              handleValueChange(e);
            }}
          />
        </div>
      </div>

      <div className={cx('row')}>
        <ComboBox options={['1', '2', '3', '4', '5', '6', '7', '8']} className={cx('combo-box')} />
      </div>

      <div className={cx('row')}>
        <div className={cx('form-group')}>
          <label>Địa chỉ</label>
          <textarea
            rows="4"
            cols="50"
            autoComplete="off"
            placeholder="Địa chỉ (Số nhà, Đường, Xã)"
            value={address}
            name="address"
            onChange={(e) => {
              handleValueChange(e);
            }}
          />
        </div>
      </div>

      {/* <div className={cx('row')}>
        <div className={cx('form-group')}>
          <label>Quận/Huyện</label>
          <input type="text" placeholder="Thành phố/Quận/Huyện" />
        </div>
      </div> */}

      <div className={cx('buttons')}>
        <Button
          text
          className={cx('cancel-btn')}
          onClick={() => {
            onCloseForm();
            handleResetValue();
          }}
        >
          Hủy
        </Button>
        <Button className={cx('add-btn')}>Tạo mới</Button>
      </div>
    </div>
  );
}

export default UserAddressForm;
