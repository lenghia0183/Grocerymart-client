import classNames from 'classnames/bind';
import styles from './FilterSideBar.module.scss';
import { EmptyStarIcon, FilterIcon, MenuIcon, StartIcon } from '../Icon';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
const cx = classNames.bind(styles);

const productType = ['Coffee', 'Cofffe đen', 'Coffee sữa', 'Coffee filter'];
const makers = ['Lavazza', 'Nescafe', 'Trung Nguyên'];

const starts = [5, 4, 3, 2, 1];

function FilterSideBar() {
  const { t } = useTranslation();
  const [packagingType, setPackagingType] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedMakers, setSelectedMakers] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const sizes = [
    { key: 'small', value: ` ${t('sidebar-filter.small')} (100g, 200g, 500g)` },
    { key: 'medium', value: `${t('sidebar-filter.medium')} (1kg, 2kg)` },
    { key: 'big', value: `${t('sidebar-filter.big')}  (5kg)` },
  ];

  const startLine = starts.map((star, index) => {
    let line = Array(star).fill(<StartIcon key={index} className={cx('star-icon')} />);
    while (line.length < 5) {
      line.push(<EmptyStarIcon key={line.length} className={cx('star-icon')} />);
    }

    return (
      <div
        className={cx('stars-line')}
        onClick={() => {
          console.log(star);
        }}
      >
        {line}
        {star !== 5 && <div className={cx('stars-text')}>{t('sidebar-filter.or-more')}</div>}
      </div>
    );
  });

  //handleCheckNumber
  const handleCheckNumber = (e) => {
    let regex = /^[0-9]*$/;
    if (regex.test(e.target.value)) return true;
    return false;
  };

  //handle product type
  console.log('product type', selectedProductType);
  const handleSelectedProductType = (value) => {
    setSelectedProductType(value);
  };

  //handle packging type
  // console.log('packaging type', packagingType);
  const handleSelectedPackgingType = (value) => {
    setPackagingType((prevSelectedPackgingType) => {
      if (prevSelectedPackgingType.includes(value)) {
        return prevSelectedPackgingType.filter((packagingType) => packagingType !== value);
      } else {
        return [...prevSelectedPackgingType, value];
      }
    });
  };

  //handle makers
  // console.log('makers', selectedMakers);
  const handleSelectedMakers = useCallback((value) => {
    setSelectedMakers((prevSelectedMakers) => {
      if (prevSelectedMakers.includes(value)) {
        return prevSelectedMakers.filter((maker) => maker !== value);
      } else {
        return [...prevSelectedMakers, value];
      }
    });
  }, []);

  //handle size
  // console.log('sizes', selectedSizes);
  const handleSelectedSize = (value) => {
    setSelectedSizes((preSelectedSize) => {
      if (preSelectedSize.includes(value)) {
        return preSelectedSize.filter((size) => size !== value);
      } else {
        return [...preSelectedSize, value];
      }
    });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('filter')}>
          <div className={cx('filter-group')}>
            <div className={cx('filter-title-container')}>
              <MenuIcon className={cx('icon')} />
              <div className={cx('filter-title')}>{t('sidebar-filter.title01')}</div>
            </div>
            <div className={cx('separate')}></div>
            <ul className={cx('list-product-type')}>
              {productType.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx('product-type-item', { 'product-type-item-active': item === selectedProductType })}
                    onClick={() => {
                      console.log('test');
                      handleSelectedProductType(item);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={cx('filter-title-container')}>
              <FilterIcon className={cx('icon')} />
              <div className={cx('filter-title')}>{t('sidebar-filter.title02')}</div>
            </div>
            <div className={cx('filter-subtitle')}>{t('sidebar-filter.sub-title01')}</div>
          </div>
          <div className={cx('packaging-type-container')}>
            <div className={cx('packaging-item')}>
              <input id="bag" type="checkbox" name="bag" />
              <label
                htmlFor="bag"
                className={cx('label-checkbox')}
                onClick={() => {
                  handleSelectedPackgingType('bag');
                }}
              >
                <div className={cx('custom-checkbox')}></div>
                {t('sidebar-filter.bag')}
              </label>
            </div>
            <div className={cx('packaging-item')}>
              <input id="box" type="checkbox" name="box" />
              <label
                htmlFor="box"
                className={cx('label-checkbox')}
                onClick={() => {
                  handleSelectedPackgingType('box');
                }}
              >
                <div className={cx('custom-checkbox')}></div>
                {t('sidebar-filter.box')}
              </label>
            </div>
          </div>
          <div className={cx('separate')}></div>
          <div className={cx('filter-subtitle')}>{t('sidebar-filter.sub-title02')}</div>
          <div className={cx('maker-container')}>
            {makers.map((item, index) => {
              return (
                <div key={item} className={cx('maker-item')}>
                  <input id={item} type="checkbox" name={`maker-${index}`} />
                  <label
                    htmlFor={item}
                    className={cx('label-checkbox')}
                    onClick={() => {
                      // console.log('test');
                      handleSelectedMakers(item);
                    }}
                  >
                    <div
                      htmlFor={item}
                      className={cx('custom-checkbox')}
                      onClick={() => {
                        handleSelectedMakers(item);
                      }}
                    ></div>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={cx('separate')}></div>
          <div className={cx('filter-subtitle')}>{t('sidebar-filter.sub-title03')}</div>
          <div className={cx('price-container')}>
            <input
              type="text"
              name="min-price"
              value={priceRange.min}
              className={cx('price-input')}
              placeholder="Min"
              onChange={(e) => {
                if (handleCheckNumber(e)) {
                  setPriceRange({ ...priceRange, min: e.target.value });
                }
              }}
            />
            <span className={cx('price-separate')}></span>
            <input
              type="text"
              name="max-price"
              value={priceRange.max}
              className={cx('price-input')}
              placeholder="Max"
              onChange={(e) => {
                if (handleCheckNumber(e)) {
                  setPriceRange({ ...priceRange, max: e.target.value });
                }
              }}
            />
          </div>
          <button className={cx('price-btn')}>{t('sidebar-filter.btn01')}</button>
          <div className={cx('separate')}></div>
          <div className={cx('filter-subtitle')}>{t('sidebar-filter.sub-title04')}</div>
          {sizes.map((item, index) => {
            return (
              <div className={cx('size-item')} key={index}>
                <input id={item.key} type="checkbox" name="size" />
                <label
                  htmlFor={item.key}
                  className={cx('label-checkbox')}
                  onClick={() => {
                    handleSelectedSize(item.key);
                  }}
                >
                  <div className={cx('custom-checkbox')}></div>
                  {item.value}
                </label>
              </div>
            );
          })}

          <div className={cx('separate')}></div>
          <div className={cx('filter-subtitle')}>{t('sidebar-filter.sub-title05')}</div>
          {startLine}
          <div className={cx('separate')}></div>
          <button className={cx('price-btn')}>{t('sidebar-filter.btn02')}</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
