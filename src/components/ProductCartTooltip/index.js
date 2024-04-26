import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './ProductCartTooltip.module.scss';
import { Link } from 'react-router-dom';
import images from '../../assets/images';
import Button from '../Button';
const settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const list = [
  {
    image: images.productCard1,
    name: 'Lavazza Coffee Blends',
    price: '$329.00',
  },
  {
    image: images.productCard2,
    name: 'Coffee Beans Espresso ',
    price: '$329.00',
  },
  {
    image: images.productCard3,
    name: 'Coffee Beans Espresso',
    price: '$47.00',
  },
  {
    image: images.productCard1,
    name: 'Lavazza Coffee Blends',
    price: '$329.00',
  },
];

const cx = classNames.bind(styles);
function ProductCartTooltip({ children }) {
  return (
    <Tippy
      interactive={true}
      // visible={true}
      // trigger="click"
      offset={[-210, 30]}
      placement="bottom"
      render={(attrs) => (
        <div className={cx('wrapper')} {...attrs}>
          <div className={cx('first-row')}>
            <div className={cx('total-item')}>You have 3 item</div>
            <Link className={cx('see-all')} to={'/payment'}>
              See All
            </Link>
          </div>

          <div className={cx('slider-container')}>
            <Slider {...settings}>
              {list.map((item, index) => {
                return (
                  <div>
                    <div className={cx('item-container', { 'first-item-container': index === 0 })}>
                      <div className={cx('img-container')}>
                        <img src={item.image} alt="Grocery Mart" />
                      </div>
                      <div className={cx('name-product')}>{item.name}</div>
                      <div className={cx('price')}>{item.price}</div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div></div>
          
          <div className={cx('separate')}></div>

          <div className={cx('total-info')}>
            <div className={cx('subtotal-row')}>
              <div className={cx('subtotal-title')}>Subtotal:</div>
              <div className={cx('subtotal-value')}>$415.99</div>
            </div>

            <div className={cx('texes-row')}>
              <div className={cx('texes-title')}>Texes:</div>
              <div className={cx('texes-value')}>Free</div>
            </div>

            <div className={cx('shipping-row')}>
              <div className={cx('shipping-title')}>Shipping:</div>
              <div className={cx('shipping-value')}>$10.00</div>
            </div>

            <div className={cx('total-row')}>
              <div className={cx('total-title')}>Total Price</div>
              <div className={cx('total-value')}>$425.99</div>
            </div>
          </div>
          <div className={cx('separate')}></div>

          <Button className={cx('checkout-btn')} rounded>
            Check Out All
          </Button>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default ProductCartTooltip;
