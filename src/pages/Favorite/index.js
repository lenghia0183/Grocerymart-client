import classNames from 'classnames/bind';
import styles from './Favorite.module.scss';

import BreadcrumbBar from '../../components/BreadcrumbBar';
import ListFavorite from './ListFavorite';
import Button from '../../components/Button';
import { BackArrow } from '../../components/Icon';
const cx = classNames.bind(styles);

function Favorite() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <BreadcrumbBar />

        <div className={cx('main-content')}>
          <div className={cx('title')}>Favorite Products</div>
          <div className={cx('number-item')}>3 items</div>

          <ListFavorite className={cx('list-item')} />

          <div className={cx('action-row')}>
            <Button to={'/'} className={cx('continue-btn')} leftIcon={<BackArrow className={cx('back-arrow')} />}>
              Continue Shopping
            </Button>

            <Button className={cx('checkout-btn')} rounded>
              Checkout All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
