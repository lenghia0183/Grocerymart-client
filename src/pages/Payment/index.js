import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { useState } from 'react';
import PaymentProduct from '../../components/PaymentProduct';
import images from '../../assets/images';
import { BackArrow } from '../../components/Icon';
import Button from '../../components/Button';
import Breadcrumb from '../../components/BreadcrumbBar';
const cx = classNames.bind(styles);

const list = [
  {
    id: 1,
    image: images.categorise1,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: 2,
    image: images.categorise2,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: 3,
    image: images.categorise3,
    name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    price: '38.65',
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: 3,
    image: images.categorise3,
    name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    price: '38.65',
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
];

function Payment() {
  //eslint-disable-next-line
  const [productList, setProductList] = useState(list);

  //eslint-disable-next-line
  const handleQuantityChange = (productId, newQuantity) => {
    setProductList((preList) => {
      return preList.map((item) => {
        return item.id === productId ? { ...item, quantity: newQuantity } : item;
      });
    });
  };

  const totalProducts = productList.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = productList
    .reduce((total, product) => total + product.quantity * parseFloat(product.price), 0)
    .toFixed(2);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Breadcrumb />

        <div className={cx('row g-xl-5')}>
          <div className={cx('col-xl-8 col-sm-12')}>
            {/* column left */}
            <div className={cx('column-left')}>
              {list.map((item, index) => {
                return (
                  <PaymentProduct
                    className={cx('payment-item')}
                    data={item}
                    key={index}
                    onQuantityChange={handleQuantityChange}
                  />
                );
              })}

              <div className={cx('column-left-last-row')}>
                <div className={cx('continue-shopping-wrapper')}>
                  <Button to={'/'} className={cx('continue-shopping-btn')} leftIcon={<BackArrow />}>
                    Continue Shopping
                  </Button>
                </div>

                <div className={cx('total-information')}>
                  <div className={cx('subtotal-row')}>
                    <div className={cx('subtotal-title')}>Subtotal:</div>
                    <div className={cx('subtotal-value')}>${totalPrice}</div>
                  </div>

                  <div className={cx('shipping-row')}>
                    <div className={cx('shipping-title')}>Shipping:</div>
                    <div className={cx('subtotal-value')}>$10:00</div>
                  </div>

                  <div className={cx('total-row')}>
                    <div className={cx('total-title')}>Total:</div>
                    <div className={cx('total-value')}>${totalPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-xl-4 col-sm-12')}>
            {/* column right */}
            <div className={cx('column-right')}>
              {/* checkout info */}
              <div className={cx('checkout-container')}>
                <div className={cx('checkout-info')}>
                  <div className={cx('checkout-subtotal-row')}>
                    <div className={cx('checkout-subtotal-title')}>Subtotal (items)</div>
                    <div className={cx('checkout-subtotal-value')}>{totalProducts}</div>
                  </div>

                  <div className={cx('checkout-price-row')}>
                    <div className={cx('checkout-price-title')}>Price (Total)</div>
                    <div className={cx('checkout-price-value')}>${totalPrice}</div>
                  </div>

                  <div className={cx('checkout-shipping-row')}>
                    <div className={cx('checkout-shipping-title')}>Shipping</div>
                    <div className={cx('checkout-shipping-value')}>$10.00</div>
                  </div>

                  <div className={cx('separate')}></div>

                  <div className={cx('checkout-total-row')}>
                    <div className={cx('checkout-total-title')}>Estimated Total</div>
                    <div className={cx('checkout-total-value')}>${totalPrice}</div>
                  </div>
                </div>

                <Button to={'/shipping'} rounded className={cx('checkout-btn')}>
                  Continue to checkout
                </Button>
              </div>

              {/* gif */}

              <div className={cx('gift-container')}>
                <div className={cx('gift-img')}>
                  <img src={images.gift} alt="" />
                </div>

                <div className={cx('gift-content')}>
                  <div className={cx('gift-title')}>Send this order as a gift.</div>
                  <div className={cx('gift-desc')}>Available items will be shipped to your gift recipient.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
