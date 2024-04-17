import classNames from 'classnames/bind';
import styles from './AuthLayout.module.scss';
import images from '../../assets/images';
import Logo from '../../components/Logo';
import { useState } from 'react';
import { NextIcon } from '../../components/Icon';
const cx = classNames.bind(styles);

function AuthLayout({ children }) {
  const [isNext, setIsNext] = useState(false);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('column-container', { 'next-column': isNext })}>
        <div className={cx('left-column')}>
          <div className={cx('left-logo')}>
            <Logo className={cx('logo')} />
          </div>

          <div className={cx('left-content')}>
            <img src={images.signIn} alt="" />
            <p className={cx('left-desc')}>
              The best of luxury brand values, high quality products, and innovative services
            </p>
          </div>
        </div>

        <div className={cx('right-column')}>
          <div className={cx('right-content')}>{children}</div>
        </div>
      </div>
      <div className={cx('indicator-container', { 'pre-container': isNext })}>
        {isNext && (
          <button
            className={cx('next-btn', { 'pre-icon': isNext })}
            onClick={() => {
              if (isNext === false) {
                setIsNext(true);
              } else {
                setIsNext(false);
              }
            }}
          >
            <NextIcon className={cx()} />
          </button>
        )}
        {!isNext && (
          <button
            className={cx('next-btn', { 'pre-icon': isNext })}
            onClick={() => {
              if (isNext === false) {
                setIsNext(true);
              } else {
                setIsNext(false);
              }
            }}
          >
            <NextIcon className={cx()} />
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthLayout;
