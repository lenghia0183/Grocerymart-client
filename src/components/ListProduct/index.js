import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';

import images from '../../assets/images';
import ProductCard from '../ProductCard';
import { FilterIcon } from '../Icon';
import Filter from '../Filter';
import Pagination from '../Pagination';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
//call api o day
function ListProduct() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(5);
  // console.log(currentPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=".container">
      <div className={cx('title-container')}>
        <span className={cx('title-product')}>{t('home.title02')}</span>
        <Filter>
          <div className={cx('filter-container')}>
            <span>{t('home.filter')}</span>
            <FilterIcon />
          </div>
        </Filter>
      </div>
      <div
        className={cx(
          // "product-card-warraper",
          'row',
          'row-cols-lg-5',
          'row-cols-md-2',
          'row-cols-1',
          'g-4',
        )}
      >
        {listProduct.map((item, index) => {
          return (
            <div key={index} className={cx('col')}>
              <Link to="/product">
                <ProductCard data={item} />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
export default ListProduct;
