import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames/bind';
import styles from './AvatarMenu.module.scss';
import AvatarMenuItem from './AvatarMenuItem';
import { AccountIcon, BackArrow, CardIcon, DarkMode, DarkModeIcon, HeartIcon, LanguageIcon, LogoutIcon } from '../Icon';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import Button from '../Button';
import images from '../../assets/images/';
const cx = classNames.bind(styles);

function AvatarMenu({ children, items = [] }) {
  const { toggleDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  };

  const list = [
    {
      title: t('menu-avatar.nav01'),
      icon: <AccountIcon />,
      link: '/profile',
    },
    {
      title: 'Giỏ hàng',
      icon: <CardIcon />,
      link: '/payment',
    },
    {
      title: t('menu-avatar.nav02'),
      icon: <HeartIcon />,
      link: '/favorite',
      sparate: true,
    },
    {
      title: t('menu-avatar.nav03'),
      icon: <DarkModeIcon />,
      action: () => {
        toggleDarkMode();
      },
    },
    {
      title: t('menu-avatar.language.title'),
      icon: <LanguageIcon />,
      subMenu: {
        title: t('menu-avatar.language.title'),
        data: [
          {
            title: t('menu-avatar.language.vi'),
            code: 'vi',
            action: () => {
              changeLanguage('vi');
            },
          },
          {
            title: t('menu-avatar.language.en'),
            code: 'en',
            action: () => {
              changeLanguage('en');
            },
          },
        ],
      },
      sparate: true,
    },
    {
      title: t('menu-avatar.nav04'),
      icon: <LogoutIcon />,
      // link: '/logout',
    },
  ];
  const [history, setHistory] = useState([{ data: list }]);

  function renderMenu() {
    return history[history.length - 1].data.map((item, index) => {
      return (
        <AvatarMenuItem
          data={item}
          key={index}
          className={cx('item')}
          onClick={() => {
            if (item.subMenu) {
              setHistory((pre) => {
                return [...pre, item.subMenu];
              });
            }
            if (item.action) {
              item.action();
            }
          }}
        />
      );
    });
  }

  return (
    <Tippy
      // visible={true}
      // visible={true}
      // offset={auto}
      delay={[0, 500]}
      offset={[-100, 25]}
      interactive={true}
      render={(attrs) => (
        <div className={cx('tippy-avatar-menu')}>
          <div className={cx('info-container')}>
            <div className={cx('avatar')}>
              <img src={images.avatarTest} alt="groceryMart" />
            </div>

            <div className={cx('user-info')}>
              <span className={cx('user-name')}>Lenghia0103</span>
              <span className={cx('user-email')}>Lenghia0108@</span>
            </div>
          </div>

          {history.length > 1 && (
            <div
              className={cx('menu-header')}
              onClick={() => {
                setHistory(history.slice(0, -1));
              }}
            >
              <Button leftIcon={<BackArrow />}>{history[history.length - 1].title}</Button>
            </div>
          )}
          {renderMenu()}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default AvatarMenu;
