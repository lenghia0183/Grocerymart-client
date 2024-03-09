import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useState } from 'react';

import ProfileSideBar from '../../components/ProfileSideBar';
import PersonalInfo from '../../components/PersonalInfo';
import ProfileAddress from '../../components/ProfileAddress';
import ProfilePassword from '../../components/ProfilePassword';
import ProfileTermOfUse from '../../components/ProfileTermOfUse';

const cx = classNames.bind(styles);

function Profile() {
  // selectedItem chon ra muc dang active
  const [selectedItem, setSelectdItem] = useState('Personal info');
  const handleMenuItemClick = (itemName) => {
    setSelectdItem(itemName);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row g-xl-5')}>
          <div className={cx('col-lg-3 col-md-4 col-sm-12')}>
            <ProfileSideBar selectedItem={selectedItem} onMenuItemClick={handleMenuItemClick} />
          </div>
          <div className={cx('col-lg-9 col-md-8 col-sm-12')}>
            <div  className={cx('item-container',{"active": selectedItem})}>
              {selectedItem == 'Personal info' && <PersonalInfo />}
              {selectedItem == 'Addresses' && <ProfileAddress />}
              {selectedItem == 'Password' && <ProfilePassword />}
              {selectedItem == 'Terms of Use' && <ProfileTermOfUse />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
