import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { useTheme } from '../../contexts/ThemeContext';
import { megaMenuItems1, megaMenuItems2, megaMenuItems3 } from '../../data/menuData';
import Wrapper from '../../components/Proper/Wrapper';
import { ArrowDown, SearchIcon, HeartIcon, CardIcon, MoreIcon, BackArrow } from '../../components/Icon';
import Logo from '../../components/Logo';
import DropDownMenu from '../../components/DropDownMenu';
import AvatarMenu from '../../components/AvatarMenu';
import ProductCartTooltip from '../../components/ProductCartTooltip';
const cx = classNames.bind(styles);

function Header() {
  const headerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [titleMenu, setTitleMenu] = useState('');
  const { isDarkMode, toggleDarkMode } = useTheme();

  //isOpen kiem soat drawerMenu xem mo hay dong
  function handleDrawerMenu() {
    if (isOpen === true) setIsOpen(false);
    else setIsOpen(true);
  }

  // lay ra ten cua menuItem cap 1 dang chon
  function handleTitleMenu(title) {
    if (titleMenu === title) setTitleMenu('');
    else setTitleMenu(title);
  }

  const menu = [
    {
      nameItem: 'Departments',
      icon: ArrowDown,
      check: false,
      data: megaMenuItems1,
      offset: [220, 50],
    },
    {
      nameItem: 'Grocery',
      icon: ArrowDown,
      check: false,
      data: megaMenuItems2,
      offset: [99, 50],
    },
    {
      nameItem: 'Beauty',
      icon: ArrowDown,
      check: false,
      data: megaMenuItems3,
      offset: [-3, 50],
    },
  ];

  return (
    <div className={cx('wrapper')}>
      {/* overlay for drawer menu of table and mobile */}
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={cx({ 'overlay-open': isOpen })}
      ></div>

      {/* header */}
      <header className={cx('container')}>
        <div className={cx('top-bar')}>
          <button on onClick={handleDrawerMenu} className={cx('more-menu')}>
            <MoreIcon className={cx('more-icon')} />
          </button>

          {/* logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* menu */}
          <ul className={cx('header-menu', isOpen ? 'drawer-menu-open' : 'drawer-menu-close')}>
            {/* isOpen == true thi moi co back-arrow */}
            {isOpen && (
              <li>
                <button onClick={handleDrawerMenu}>
                  <BackArrow />
                </button>
              </li>
            )}

            {/* render menuItems */}
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <li className={cx('header-menu__item')} key={index}>
                  {/* if on destop it will render mega menu */}
                  {!isOpen && (
                    <DropDownMenu
                      ref={headerRef}
                      data={item.data}
                      offset={item.offset}
                      visible={item.check}
                      isMoreMenu={false}
                    >
                      <div>
                        {item.nameItem}
                        <button className={cx('header-menu__icon')}>
                          <Icon />
                        </button>
                      </div>
                    </DropDownMenu>
                  )}

                  {/* if on table an mobile below will render drawer menu */}
                  {isOpen && (
                    <div>
                      <div
                        className={cx('header-menu__inner-item')}
                        onClick={() => {
                          handleTitleMenu(item.nameItem);
                        }}
                      >
                        {item.nameItem}
                        <button className={cx('header-menu__icon')}>
                          <Icon />
                        </button>
                      </div>
                      <DropDownMenu
                        className={cx('menu-drop-group', item.nameItem === titleMenu ? 'menu-drop-group-open' : '')}
                        isMoreMenu={true}
                        data={item.data}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* action bar */}
          <div className={cx('action-bar')}>
            <Button btnIcon className={cx('action-bar__search-btn')}>
              <SearchIcon className={cx('action-bar__icon')} />
            </Button>

            <Wrapper className={cx('action-bar__group')}>
              <Button
                className={cx('action-bar__heart-btn')}
                btnIcon
                leftIcon={<HeartIcon className={cx('action-bar__icon')} />}
              >
                03
              </Button>

              <ProductCartTooltip>
                <span>
                  <Button
                    className={cx('action-bar__card-btn')}
                    btnIcon
                    leftIcon={<CardIcon className={cx('action-bar__icon')} />}
                  >
                    $65.42
                  </Button>
                </span>
              </ProductCartTooltip>
            </Wrapper>
          </div>

          {/* <Tippy
            interactive={true}
            // visible={true}
            render={(attrs) => (
              <Wrapper>
                <button className={cx('dark-mode-btn')} onClick={toggleDarkMode}>
                  Sang Toi
                </button>
                <Link to="/profile">
                  <button>Thong tin</button>
                </Link>
              </Wrapper>
            )}
          >
            <div className={cx('header__avatar')}></div>
          </Tippy> */}
          <AvatarMenu>
            <div className={cx('header__avatar')}></div>
          </AvatarMenu>
        </div>
      </header>
    </div>
  );
}

export default Header;
