import classNames from 'classnames/bind';

import styles from './ProfileSideBar.module.scss';
import images from '../../assets/images';
import {
  AccountIcon,
  AddressIcon,
  DownloadIcon,
  GiftIcon,
  HeartIcon,
  HelpIcon,
  MessageIcon,
  PasswordIcon,
  ShieldIcon,
  WarningIcon,
} from '../Icon';

const cx = classNames.bind(styles);

// list icon and name of item menu
const menu = [
  {
    name: 'Manage Account',
    isTitle: true,
  },
  {
    name: 'Personal info',
    icon: AccountIcon,
  },
  {
    name: 'Addresses',
    icon: AddressIcon,
  },
  {
    name: 'Password',
    icon: PasswordIcon,
  },
  {
    name: 'My items',
    isTitle: true,
  },
  {
    name: 'Reorder',
    icon: DownloadIcon,
  },
  {
    name: 'Lists',
    icon: HeartIcon,
  },
  {
    name: 'Registries',
    icon: GiftIcon,
  },
  {
    name: 'Subscriptions & plans',
    isTitle: true,
  },
  {
    name: 'Protection plans',
    icon: ShieldIcon,
  },
  {
    name: 'Customer Service',
    isTitle: true,
  },
  {
    name: 'Help',
    icon: HelpIcon,
  },
  {
    name: 'Terms of Use',
    icon: WarningIcon,
  },
];

function ProfileSideBar({ onMenuItemClick, selectedItem }) {
  // console.log(onMenuItemClick);
  return (
    <div className={cx('wrapper')}>
      {/* cover image and avarta */}
      <div className={cx('avatar-container')}>
        <img className={cx('cover-image')} src={images.coverImage} />
        <div className={cx('user-info-container')}>
          <img src={images.avatar1} />
          <span className={cx('user-name')}>Imran Khan</span>
          <span className={cx('registered-day')}>Registered: 17th May 2022</span>
        </div>
      </div>

      {/* menu */}
      <div className={cx('menu')}>
        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={cx('menu-item', { 'menu-title': item.isTitle }, { active: selectedItem == item.name })}
              onClick={() => {
                onMenuItemClick(item.name);
              }}
            >
              {item.icon && <Icon className={cx('icon')} />}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileSideBar;
