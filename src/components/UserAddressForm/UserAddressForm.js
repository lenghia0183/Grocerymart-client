import classNames from 'classnames/bind';
import styles from './userAddressForm.module.scss';

import { useEffect, useState } from 'react';
import Button from '../Button';
import ComboBox from '../ComboBox/ComboBox';
import { useDispatch } from 'react-redux';
import { getDistricts, getProvinces, getWards } from '../../apiService/locationService';

const cx = classNames.bind(styles);

function UserAddressForm({ onCloseForm, isOpen }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinceSelected, setProvinceSelected] = useState({ name: '' });
  const [districtSelected, setDistrictSelected] = useState({ name: '' });
  const [wardSelected, setWardSelected] = useState({ name: '' });

  //call api lấy province
  useEffect(() => {
    dispatch(getProvinces()).then((result) => {
      setProvinces(result.payload.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call api lấy district
  useEffect(() => {
    setDistrictSelected({ name: '' });
    setWardSelected({ name: '' });
    dispatch(getDistricts({ idProvince: provinceSelected.id })).then((result) => {
      // console.log(result);
      setDistricts(result.payload.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provinceSelected]);

  // call api lấy ward
  useEffect(() => {
    setWardSelected({ name: '' });
    dispatch(getWards({ idDistrict: districtSelected.id })).then((result) => {
      // console.log(result);
      setWards(result.payload.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districtSelected]);

  //handle province change
  const handleProvinceChange = (value) => {
    setProvinceSelected(value);
  };

  //handle district change
  const handleDistrictChange = (value) => {
    setDistrictSelected(value);
  };

  //handle ward change
  const handleWardChange = (value) => {
    setWardSelected(value);
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

  // console.log('thành phố', provinceSelected.name, 'Huyện', districtSelected.name, 'xa', wardSelected.name);

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
          <ComboBox options={provinces} onChangeValue={handleProvinceChange} value={provinceSelected?.name} />
        </div>

        <div className={cx('form-group')}>
          <label>Huyện</label>
          <ComboBox
            options={districts}
            onChangeValue={handleDistrictChange}
            className={cx({ 'input-disable': !provinceSelected.name })}
            value={districtSelected?.name}
          />
        </div>

        <div className={cx('form-group')}>
          <label>Xã</label>
          <ComboBox
            options={wards}
            onChangeValue={handleWardChange}
            className={cx({ 'input-disable': !districtSelected.name })}
            value={wardSelected?.name}
          />
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
