import classNames from 'classnames/bind';
import styles from './PersonalInfor.module.scss';
import { useState, useCallback } from 'react';

import images from '../../assets/images';
import { AddressIcon, MessageIcon, PhoneIcon, PlusCardIcon } from '../Icon';
import ProfileAddCard from '../ProfileAddCard';
import Button from '../Button';
import ProfileChangeInfo from '../ProfileChangeInfo';
const cx = classNames.bind(styles);

const cards = [
  {
    image: images.card1,
  },
  {
    image: images.card2,
  },
];

const acountInfo = [
  {
    label: 'Email Address',
    userInfo: 'tarek97.ta@gmail.com',
    icon: MessageIcon,
  },
  {
    label: 'Phone number',
    userInfo: '+000 11122 2345 657',
    icon: PhoneIcon,
  },
  {
    label: 'Add an address',
    userInfo: 'Bangladesh Embassy, Washington, DC 20008',
    icon: AddressIcon,
  },
];

const listItem = [
  {
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    image: images.categorise1,
    price: '$47.00',
  },
  {
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    image: images.categorise2,
    price: '$53.00',
  },
];

function PersonalInfo() {
  const [nameUpdate, setNameUpdate] = useState('');

  //neu nameUpdate la "" thi se render ra giao dien chinh con neu la
  // info => <ProfileUpdateInfo>
  // cards => <ProfileUpdateCards>

  const handleUpdateInfo = useCallback(
    (nameOption) => {
      if (!nameOption) {
        setNameUpdate(nameOption);
      }
    },
    [setNameUpdate],
  );

  return (
    <div className={cx('wrapper')}>
      {/* nameUpdate =="" */}
      {nameUpdate == '' && (
        <div className={cx('info-wrapper')}>
          <span className={cx('label')}>My Wallet</span>
          <p className={cx('desc')}>Payment methods</p>

          {/* cards */}
          <div className={cx('cards-container')}>
            {cards.map((card, index) => {
              return <img src={card.image} className={cx('card')} alt={'card'} key={index} />;
            })}

            <div
              className={cx('add-new-card', 'card')}
              onClick={() => {
                setNameUpdate('cards');
              }}
            >
              <div>
                <PlusCardIcon />
                <div>Add New Card</div>
              </div>
            </div>
          </div>

          <span className={cx('label')}>Account info</span>
          <p className={cx('desc')}>Addresses, contact information and password</p>

          {/* infor */}
          <div>
            <div className={cx('info-container')}>
              {acountInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className={cx('info-item-container')}>
                    <div className={cx('icon-container')}>
                      <Icon className={cx('icon')} />
                    </div>

                    <div className={cx('main-info')}>
                      <span className={cx('info-label')}>{item.label}</span>
                      <span className={cx('info-detail')}>{item.userInfo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              onClick={() => {
                setNameUpdate('info');
              }}
              rounded
              className={cx('change-info-btn')}
            >
              Change info
            </Button>
          </div>

          <span className={cx('label')}>Lists</span>
          <p className={cx('desc')}>2 items - Primary</p>

          {/* list product */}
          <div className={cx('list-product-container')}>
            {listItem.map((item, index) => {
              return (
                <div className={cx('product-item')}>
                  <img src={item.image} />
                  <div className={cx('product-info-container')}>
                    <span className={cx('product-name')}>{item.name}</span>
                    <div className={cx('price-container')}>
                      <span className={cx('product-price')}>{item.price}</span>
                      <button className={cx('add-btn')}> Add to cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* update-container render khi nameUpdate != "" */}
      <div className={cx('update-container', { 'update-slide-in': nameUpdate })}>
        {nameUpdate == 'cards' && <ProfileAddCard onAddCard={handleUpdateInfo} />}

        {nameUpdate == 'info' && <ProfileChangeInfo onChangeInfo={handleUpdateInfo} />}
      </div>
    </div>
  );
}

export default PersonalInfo;
