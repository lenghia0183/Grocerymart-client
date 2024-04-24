import classNames from 'classnames/bind';
import styles from './PaymentProduct.module.scss';
import images from '../../assets/images';
import { useState } from 'react';
import Button from '../Button';
import { DecreaseIcon, DeleteIcon, HeartIcon, IncreaseIcon } from '../Icon';
const cx = classNames.bind(styles);

function PaymentProduct({ data, className }) {
  // console.log(data);
  const [numberProduct, setNumberProduct] = useState(0);
  // console.log(numberProduct);
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
    <div className={cx('wrapper', { className })}>
      <img src={data.image} className={cx('thumbnail')} alt="" />
      <div className={cx('main-content')}>
        <div className={cx('column-left')}>
          <span className={cx('name-product')}>{data.name}</span>
          <div className={cx('price-state-container')}>
            <span className={cx('price')}>${data.price}</span>
            <span className={cx('state')}>{data.state}</span>
          </div>

          <div className={cx('brand-quatity-container')}>
            <div className={cx('brand')}>LavAzza</div>
            <div className={cx('quantity-container')}>
              <div className={cx('quantity-inner')}>
                <button onClick={handDecrease} className={cx('decrease-btn')}>
                  <DecreaseIcon/>
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
                  <IncreaseIcon/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('action-column')}>
          <span className={cx('total')}>$47.00</span>

          <div className={cx('action-container')}>
            <Button className={cx('action-btn')} leftIcon={<HeartIcon />}>
              Save
            </Button>
            <Button className={cx('action-btn')} leftIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentProduct;
