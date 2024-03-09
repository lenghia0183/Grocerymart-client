import classNames from 'classnames/bind';
import styles from './ProductImageGallery.module.scss';
import images from '../../assets/images';
import { useState } from 'react';
const cx = classNames.bind(styles);

function ProductImageGallery() {

  //chon anh dang active
  const [imageselected, setImageSelected] = useState(null);

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
                className={cx(
                  { active: index === imageselected },
                  { 'first-item': index == 0 && imageselected == null },
                )}
              />
            );
          })}
        </div>

        <div className={cx('list-small-image')}>
          {data.map((item, index) => {
            return (
              <img
                className={cx({ 'active-small': index === imageselected })}
                src={item.image}
                key={index}
                onClick={() => {
                  setImageSelected(index);
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
