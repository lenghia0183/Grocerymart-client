import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import Wrapper from '../../components/Proper/Wrapper';
import { SearchIcon, HeartIcon, CardIcon, MoreIcon, BackArrow } from '../../components/Icon';
import Logo from '../../components/Logo';
import AvatarMenu from '../../components/AvatarMenu';
import ProductCartTooltip from '../../components/ProductCartTooltip';

import { useTranslation } from 'react-i18next';
const cx = classNames.bind(styles);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  //isOpen kiem soat drawerMenu xem mo hay dong

  const { t } = useTranslation();
  function handleDrawerMenu() {
    if (isOpen === true) setIsOpen(false);
    else setIsOpen(true);
  }
  // lay ra ten cua menuItem cap 1 dang chon
  const menu = [
    {
      nameItem: t('header.nav01'),
      link: '/',
    },
    {
      nameItem: t('header.nav02'),
      link: '/coffee',
    },
    {
      nameItem: t('header.nav03'),
      link: '/tea',
    },
    {
      nameItem: t('header.nav04'),
      link: '/cacao',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      {/* overlay for drawer menu of table and mobile */}
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={cx('overlay', { 'overlay-open': isOpen })}
      ></div>

      {/* header */}
      <header className={cx('container')}>
        <div className={cx('top-bar')}>
          <button
            onClick={() => {
              handleDrawerMenu();
            }}
            className={cx('more-menu')}
          >
            <MoreIcon className={cx('more-icon')} />
          </button>

          {/* logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* menu */}

          <div className={cx('drawer-menu-container', { 'drawer-open': isOpen })}>
            <ul className={cx('drawer-menu')}>
              <span
                className={cx('back-arrow')}
                onClick={() => {
                  handleDrawerMenu();
                }}
              >
                <BackArrow />
              </span>

              {menu.map((item, index) => {
                return (
                  <li className={cx('menu-drawer-item')} key={index}>
                    <Link
                      onClick={() => {
                        handleDrawerMenu();
                      }}
                      to={item.link}
                    >
                      {item.nameItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {!isOpen && (
            <ul className={cx('header-menu')}>
              {menu.map((item, index) => {
                return (
                  <li className={cx('menu-item')} key={index}>
                    <Link to={item.link}>{item.nameItem}</Link>
                  </li>
                );
              })}
            </ul>
          )}

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

          <AvatarMenu>
            <div className={cx('header__avatar')}></div>
          </AvatarMenu>
        </div>
      </header>
    </div>
  );
}

export default Header;
