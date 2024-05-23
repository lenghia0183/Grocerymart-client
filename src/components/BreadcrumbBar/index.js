import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { ArrowRight } from '../Icon';

const cx = classNames.bind(styles);
function Breadcrumb({ className }) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  // console.log(pathnames);
  return (
    <div className={cx('wrapper', className)}>
      <Link to="/" className={cx('link')}>
        Home
      </Link>
      {pathnames.map((path, index) => {
        return (
          <div className={cx('link-container')}>
            <ArrowRight className={cx('arrow-right')} />
            <Link
              className={cx({ link: index !== pathnames.length - 1 }, { 'none-click': index === pathnames.length - 1 })}
              to={`/${pathnames.slice(0, index + 1).join('/')}`}
            >
              {path.split('').map((littel, index) => {
                if (index === 0) {
                  return littel.toUpperCase();
                }
                return littel;
              })}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
