import classNames from 'classnames/bind';
import styles from './userAddressForm.module.scss';

import { useRef, useEffect, useState } from 'react';
import Button from '../Button';
import ComboBox from '../ComboBox/ComboBox';
import { useDispatch } from 'react-redux';
import { getDistricts, getProvinces, getWards } from '../../apiService/locationService';

const cx = classNames.bind(styles);

function UserAddressForm({ onCloseForm }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinceSelected, setProvinceSelected] = useState('');
  const [districtSelected, setDistrictSelected] = useState('');
  const [wardSelected, setWardSelected] = useState('');

  useEffect(() => {
    dispatch(getProvinces()).then((result) => {
      // console.log(result);
      setProvinces(result.payload.data);
    });
  }, []);

  useEffect(() => {
    dispatch(getDistricts({ idProvince: provinceSelected.id })).then((result) => {
      console.log(result);
      setDistricts(result.payload.data);
    });
  }, [provinceSelected]);

  useEffect(() => {
    dispatch(getWards({ idDistrict: districtSelected.id })).then((result) => {
      console.log(result);
      setWards(result.payload.data);
    });
  }, [districtSelected]);

  const handleResetValue = () => {
    setName('');
    setPhone('');
    setAddress('');
  };

  const handleProvinceChange = (value) => {
    setProvinceSelected(value);
  };

  const handleDistrictChange = (value) => {
    setDistrictSelected(value);
  };

  const handleWardChange = (value) => {
    setWardSelected(value);
  };

  // console.log(provinceSelected);
  console.log(districtSelected);

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
      {/* name */}
      <div className={cx('row')}>
        <div className={cx('form-group')}>
          <label>Họ tên</label>
          <input
            className={cx('input')}
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

        {/* phone */}
        <div className={cx('form-group')}>
          <label>Số điện thoại</label>
          <input
            type="text"
            className={cx('input')}
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

      {/* city district province */}
      <div className={cx('row')}>
        <div className={cx('form-group')}>
          <label>Thành phố</label>
          <ComboBox options={provinces} type="province" onProvinceChange={handleProvinceChange} />
        </div>

        <div className={cx('form-group')}>
          <label>Huyện</label>
          <ComboBox options={districts} type="district" onDistrictChange={handleDistrictChange} />
        </div>

        <div className={cx('form-group')}>
          <label>Xã</label>
          <ComboBox options={wards} type="ward" onWardChange={handleWardChange} />
        </div>
      </div>

      {/* address */}
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

      {/* btns */}
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
