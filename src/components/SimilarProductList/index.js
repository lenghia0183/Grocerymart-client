import classNames from 'classnames/bind';
import styles from './SimilarProductList.module.scss';
import ProductCard from '../ProductCard';
import images from '../../assets/images';
// import { StartIcon } from '../../Icon';

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
];
function SimilarProductList() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row g-xl-5')}>
        {listProduct.map((item, index) => {
          return (
            <div className={cx('col-xl-3 col-md-4 col-sm-12')}>
              <ProductCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarProductList;
