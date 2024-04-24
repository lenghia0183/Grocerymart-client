import classNames from 'classnames/bind';
import styles from './ProductImageGallery.module.scss';
import images from '../../assets/images';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ProductImageGallery() {
  //chon anh dang active
  const [imageSelected, setImageSelected] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const data = [
    {
      image: images.productCard1,
    },
    {
      image: images.productCard2,
    },
    {
      image: images.productCard3,
    },
    {
      image: images.productCard4,
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('slider')}>
        <div className={cx('list-img')}>
          {data.map((item, index) => {
            return (
              <img
                src={item.image}
                key={index}
                alt=""
                className={cx({ active: index === imageSelected }, { 'first-item': index === 0 && !isClicked })}
              />
            );
          })}
        </div>

        <div className={cx('list-small-image')}>
          {data.map((item, index) => {
            return (
              <img
                alt=""
                className={cx({ 'active-small': index === imageSelected })}
                src={item.image}
                key={index}
                onClick={() => {
                  setImageSelected(index);
                  setIsClicked(true);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductImageGallery;
