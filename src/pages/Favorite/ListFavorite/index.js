import classNames from 'classnames/bind';
import styles from './ListFavorite.module.scss';
import images from '../../../assets/images';
import FavoriteItem from '../FavoriteItem';
import { useState } from 'react';
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
    id: 4,
    image: images.categorise3,
    name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
    price: '38.65',
    state: 'In Stock',
    brand: 'LavAzza',
    quantity: 1,
  },
];

// lay du lieu tu api roi them thuoc tinh selected
const data = list.map((item) => {
  return {
    ...item,
    selected: true,
  };
});

function ListFavorite({ className }) {
  const [listItem, setListItem] = useState(data);
  const [isCheckedAll, setIsCheckedAll] = useState(true);

  // console.log(listItem);

  // khi so luong hoac trang thai checked thay doi se cap nhat lai danh sach
  const handleItemUpdate = (itemId, updatedInfo) => {
    setListItem((preItemInfo) => {
      const updatedItems = preItemInfo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            ...updatedInfo,
          };
        }
        return item;
      });
      const isAllItemsSelected = updatedItems.every((item) => item.selected);
      setIsCheckedAll(isAllItemsSelected);
      return updatedItems;
    });
  };

  // duyet qua tung item chuyen trang thai selected  khi bam chon tat ca
  const handleToggleClickAll = () => {
    setIsCheckedAll(!isCheckedAll);
    const updateItems = listItem.map((item) => {
      return {
        ...item,
        selected: !isCheckedAll,
      };
    });
    setListItem(updateItems);
  };

  const handleItemToggle = (itemId) => {
    // console.log(itemId);
    const updatedItems = listItem.map((item) => (item.id === itemId ? { ...item, selected: !item.selected } : item));
    setListItem(updatedItems);
  };

  return (
    <div className={className}>
      <div className={cx('check-all-container')}>
        <div className={cx('check-box', { checked: isCheckedAll })} onClick={handleToggleClickAll}></div>
        <div>Check All</div>
      </div>

      {listItem.map((item, index) => {
        return <FavoriteItem onUpdate={handleItemUpdate} onToggle={handleItemToggle} data={item} key={index} />;
      })}
    </div>
  );
}

export default ListFavorite;
