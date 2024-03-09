import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './AvatarMenu.module.scss';
import AvatarMenuItem from './AvatarMenuItem';
import { AccountIcon, BackArrow, DarkMode, DarkModeIcon, HeartIcon, LanguageIcon } from '../Icon';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import Button from '../Button';
const cx = classNames.bind(styles);

function AvatarMenu({ children, items = [] }) {
  const { toggleDarkMode } = useTheme();

  const list = [
    {
      title: 'Profile',
      icon: <AccountIcon />,
      link: '/profile',
    },
    {
      title: 'Favorite',
      icon: <HeartIcon />,
      link: '/favorite',
      sparate: true,
    },
    {
      title: 'DarkMode',
      icon: <DarkModeIcon />,
      action: () => {
        toggleDarkMode();
      },
    },
    {
      title: 'Language',
      icon: <LanguageIcon />,
      subMenu: {
        title: 'Language',
        data: [
          {
            title: 'Vietnamiese',
            code: 'vi',
          },
          {
            title: 'English',
            code: 'en',
          },
        ],
      },
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
      // offset={auto}
      delay={[0, 500]}
      interactive={true}
      render={(attrs) => (
        <div className={cx('tippy-avatar-menu')}>
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
