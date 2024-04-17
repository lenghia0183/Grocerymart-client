import classNames from 'classnames/bind';
import styles from './Coffee.module.scss';
import BreadCrumb from '../../components/BreadcrumbBar';
import FilterSideBar from '../../components/FilterSideBar';
import { ArrowDown } from '../../components/Icon';
import images from '../../assets/images';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../components/Pagination';
import { useState } from 'react';
const cx = classNames.bind(styles);

const listProduct = [
  {
    thumbnail: images.productCard1,
    alt: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    nameProduct: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    maker: 'Lavazza',
    price: '$47.00',
    startRate: '4.3',
  },
  {
    thumbnail: images.productCard2,
    alt: 'Lavazza Coffee Blends - Try the Italian Espresso',
    nameProduct: 'Lavazza Coffee Blends - Try the Italian Espresso',
    maker: 'Lavazza',
    price: '$53.00',
    startRate: '3.4',
  },
  {
    thumbnail: images.productCard3,
    alt: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    nameProduct: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    maker: 'welikecoffee',
    price: '$99.99',
    startRate: '5.0',
  },
  {
    thumbnail: images.productCard2,
    alt: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    nameProduct: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    maker: 'Lavazza',
    price: '$38.65',
    startRate: '4.4',
  },
  {
    thumbnail: images.productCard1,
    alt: 'Lavazza Coffee Blends - Try the Italian Espresso',
    nameProduct: 'Lavazza Coffee Blends - Try the Italian Espresso',
    maker: 'Lavazza',
    price: '$53.00',
    startRate: '3.4',
  },
  {
    thumbnail: images.productCard3,
    alt: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    nameProduct: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    maker: 'Lavazza',
    price: '$38.65',
    startRate: '4.4',
  },
  {
    thumbnail: images.productCard1,
    alt: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    nameProduct: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    maker: 'welikecoffee',
    price: '$99.99',
    startRate: '5.0',
  },
];

function Coffee() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnPageChange = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <BreadCrumb />
        <div className={cx('row')}>
          <div className={cx('col-xl-3 col-md-12')}>
            <FilterSideBar />
          </div>

          <div className={cx('col-xl-9')}>
            <div className={cx('container')}>
              <div className={cx('filter-bar')}>
                <div className={cx('filter-bar-title')}>Hiển thị theo</div>
                <div className={cx('display-option')}>Phổ biến nhất</div>
                <div className={cx('display-option')}>Mới nhất</div>
                <div className={cx('display-option')}>Bán chạy</div>

                {/* price option */}
                <div className={cx('price-display-option')}>
                  <div className={cx('price-title-container')}>
                    <div className={cx('price-title')}>Giá</div>
                    <ArrowDown className={cx('arrow-icon')} />

                    <div className={cx('price-options')}>
                      <div className={cx('price-option')}>Giá: tăng giảm dần</div>
                      <div className={cx('price-option')}>Giá: giảm giảm dần</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx('container')}>
              <div className={cx('row g-3', 'list-product')}>
                {listProduct.map((item, index) => (
                  <div className={cx('col-xl-3 col-md-4 col-sm-6 product-card-container')}>
                    <ProductCard key={index} data={item} />
                  </div>
                ))}
              </div>
            </div>
            <Pagination onPageChange={handleOnPageChange} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
