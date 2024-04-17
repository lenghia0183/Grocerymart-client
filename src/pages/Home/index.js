import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';
import Slider from '../../components/Slider';
import CategoriesProduct from '../../components/CategoriesProduct';
import ListProduct from '../../components/ListProduct';
import { useTranslation } from 'react-i18next';
const cx = classNames.bind(styles);

function Home() {
  const { t } = useTranslation();
  const listImage = [
    {
      alt: 'grocery mart',
      slide: images.slideShow1,
    },
    {
      alt: 'grocery mart',
      slide: images.slideShow2,
    },
    {
      alt: 'grocery mart',
      slide: images.slideShow3,
    },
  ];

  const listCategorise = [
    {
      thumbnail: images.categorise1,
      price: '$24 - $150',
      desc: 'New sumatra mandeling coffe blend',
      alt: '',
    },
    {
      thumbnail: images.categorise2,
      price: '$37 - $160',
      desc: 'Espresso arabica and robusta beans',
      alt: '',
    },
    {
      thumbnail: images.categorise3,
      price: '$32 - $160',
      desc: 'Lavazza top class whole bean coffee blend',
      alt: '',
    },
    // {
    //     thumbnail: images.categorise3,
    //     price: "$32 - $160",
    //     desc: "Lavazza top class whole bean coffee blend",
    //     alt: "",
    // },
  ];

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

  return (
    <div className={cx('home-page-wrapper')}>
      <div className={cx('container')}>
        {/* slide show */}
        <Slider className={cx('slide-show')} listImage={listImage}></Slider>

        {/* categorise */}
        <span className={cx('browse-categories')}>{t('home.title01')}</span>
        <div className={cx('categorise-wrapper', 'row', 'row-cols-md-3', 'row-cols-1', 'g-3')}>
          {listCategorise.map((item, index) => {
            return (
              <div key={index}>
                <CategoriesProduct key={index} data={item} />
              </div>
            );
          })}
        </div>
        <ListProduct />
      </div>
    </div>
  );
}

export default Home;
