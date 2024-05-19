import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './UserAddressCard.module.scss';
import Button from '../../components/Button';
import { EditIcon } from '../Icon';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserAddressCard() {
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <article className={cx('address-card')}>
      <div className={cx('address-card__left')}>
        <div className={cx('address-card__choose')}>
          {/* <input name="shipping-address" type="radio" className={cx('address-card__checkbox-input')} />
           */}

          <div
            className={cx('check-box', { checked: isChecked })}
            onClick={() => {
              handleCheck();
            }}
          ></div>
        </div>
        <div className={cx('address-card__info')}>
          <h3 className={cx('address-card__title')}>Lê nghĩa</h3>
          <p className={cx('address-card__desc')}>Số 15, ngõ 36, đường An Lạc 1, Hạ Mỗ, Đan Phượng, Hà Nội</p>
          <ul className={cx('address-card__list')}>
            <li className={cx('address-card__list-item')}>Giao hàng từ cửa hàng</li>
          </ul>
        </div>
      </div>
      <div className={cx('address-card__right')}>
        <div className={cx('address-card__ctrl')}>
          <Button text leftIcon={<EditIcon className={cx('icon')} />} className={cx('address-card__ctrl-btn')}>
            Chỉnh sửa
          </Button>
        </div>
      </div>
    </article>
  );
}

export default UserAddressCard;
