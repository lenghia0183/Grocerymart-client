import classNames from 'classnames/bind';
import styles from './FavoriteItem.module.scss';
import { useEffect, useState, useLayoutEffect } from 'react';
import Button from '../../../components/Button';
import { DecreaseIcon, DeleteIcon, IncreaseIcon } from '../../../components/Icon';
const cx = classNames.bind(styles);

function FavoriteItem({ data, onToggle, onUpdate }) {
  // luu so luong san pham
  const [numberProduct, setNumberProduct] = useState(data.quantity);

  // luu trang thai checked cua item
  const [isChecked, setIsChecked] = useState(true);

  // khi so luong, trang thai check thaay doi cap nhat lai danh sach
  useEffect(() => {
    onUpdate(data.id, { quantity: numberProduct });
  }, [numberProduct, isChecked]);

  // khi trang thai checked thay dou se goi ham onToggle de cap nhat lai trang thai item
  // theo id
  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
    onToggle(data.id);
  };

  const handleIncrease = () => {
    setNumberProduct((pre) => {
      return ++pre;
    });
  };

  const handDecrease = () => {
    setNumberProduct((pre) => {
      if (pre === 0) {
        return 0;
      }
      return --pre;
    });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('check-box', { checked: data.selected })} onClick={handleToggleChecked}></div>
      <img src={data.image} className={cx('thumbnail')} alt="" />
      <div className={cx('main-content')}>
        <div className={cx('column-left')}>
          <span className={cx('name-product')}>{data.name}</span>

          <div className={cx('price-state-container')}>
            <span className={cx('price')}>${data.price}</span>
            <span className={cx('state')}>{data.state}</span>
          </div>

          <div className={cx('brand-quantity-container')}>
            <div className={cx('brand')}>LavAzza</div>
            <div className={cx('quantity-container')}>
              <div className={cx('quantity-inner')}>
                <button onClick={handDecrease} className={cx('decrease-btn')}>
                  <DecreaseIcon className={cx('quantity-icon')} />
                </button>
                <input
                  className={cx('input-number-product')}
                  onChange={(e) => {
                    setNumberProduct(e.target.value);
                  }}
                  value={numberProduct}
                  type="number"
                  inputMode="numeric"
                />
                <span className={cx('number-product')}>{numberProduct}</span>
                <button onClick={handleIncrease} className={cx('increase-btn')}>
                  <IncreaseIcon className={cx('quantity-icon')} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('action-column')}>
          <span className={cx('total')}>$47.00</span>

          <div className={cx('action-container')}>
            <Button className={cx('delete-btn')} leftIcon={<DeleteIcon className={cx('delete-icon')} />}>
              Delete
            </Button>

            <Button rounded className={cx('checkout-btn')}>
              Thanh Toan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FavoriteItem;
