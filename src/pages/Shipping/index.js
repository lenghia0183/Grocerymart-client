import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';
import { useState } from 'react';
import Button from './../../components/Button';
import BreadcrumbBar from './../../components/BreadcrumbBar';
import { BackArrow, IncreaseIcon } from '../../components/Icon';
import UserAddressCard from '../../components/UserAddressCard/UserAddressCard';
import images from '../../assets/images';
import PaymentProduct from '../../components/PaymentProduct';
// import Modal from "../../components/Modal"
import Modal from '../../components/Modal';
import UserAddressForm from '../../components/UserAddressForm/UserAddressForm';
const cx = classNames.bind(styles);

const list = [
  {
    id: '1',
    image: images.categorise1,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: 47.0,
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: '2',
    image: images.categorise2,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: 47.0,
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: '3',
    image: images.categorise3,
    name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    price: 38.65,
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
  {
    id: '3',
    image: images.categorise3,
    name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    price: 38.65,
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
];

function Shipping() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState(list);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
  // console.log(productList);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Modal isOpen={isModalOpen} label="Thêm địa chỉ giao hàng mới" onClose={closeModal}>
          {/* cho component mounted và un mounted để reset dữ liệu */}
          {isModalOpen && <UserAddressForm onCloseForm={closeModal} />}
        </Modal>

        <BreadcrumbBar className={cx('breadcrumb')} />

        <div className={cx('row g-xl-5')}>
          <div className={cx('col-xl-8')}>
            <div className={cx('left-column')}>
              <h2 className={cx('left-heading')}>Thông tin vận chuyển</h2>

              <div className={cx('separate')}></div>

              <div className={cx('user-address-container')}>
                <div className={cx('user-address-top')}>
                  <div>
                    <div className={cx('user-address-title')}>Địa chỉ giao hàng</div>
                    <div className={cx('user-address-desc')}>Chúng tôi nên giao hàng cho bạn ở đâu?</div>
                  </div>
                  <Button
                    className={cx('add-address-btn')}
                    rounded
                    leftIcon={<IncreaseIcon />}
                    onClick={() => {
                      openModal();
                    }}
                  >
                    Thêm địa chỉ mới
                  </Button>
                </div>
              </div>

              <div className={cx('user-address-list')}>
                <UserAddressCard />
                <UserAddressCard />
              </div>
              <div className={cx('separate')}></div>

              <div className={cx('list-product')}>
                <div className={cx('list-product-title')}>Chi tiết các sản phẩm</div>

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
              </div>

              <Button to={'/'} text leftIcon={<BackArrow />}>
                Tiếp tục mua hàng
              </Button>
            </div>
          </div>

          <div className={cx('col-xl-4')}>
            <div className={cx('right-column')}>
              <div className={cx('total-product')}>
                <div className={cx('total-product-label')}>Số sản phẩm:</div>
                <div className={cx('total-product-value')}>{totalProducts}</div>
              </div>

              <div className={cx('total-money')}>
                <div className={cx('total-money-label')}>Tổng giá tiền:</div>
                <div className={cx('total-money-value')}>${totalPrice}</div>
              </div>

              <div className={cx('total-shipping')}>
                <div className={cx('total-shipping-label')}>Phí giao hàng:</div>
                <div className={cx('total-shipping-value')}>$10.00</div>
              </div>

              <div className={cx('separate')}></div>

              <div className={cx('total')}>
                <div className={cx('total-label')}>Thành tiền:</div>
                <div className={cx('total-value')}>{totalPrice}</div>
              </div>

              <Button large rounded className={cx('continue-payment-btn')}>
                Tiếp tục thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
